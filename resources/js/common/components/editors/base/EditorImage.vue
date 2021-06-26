<template>

	<div class="my-3">

		<label v-if="label">
			{{ label }}{{ isRequired ? '*' : '' }}
		</label>

		<div
			id="image-editor-preview"
			:class="previewClasses"
			:style="previewStyles"
			v-if="workingData"
		>

			<img
				ref="srcImg"
				:src="workingData"
				:style="{
					'object-fit': previewFit,
					'object-position': previewPosition,
					'width': '100%',
					'height': '100%',
				}"
				class="image"
				crossorigin="anonymous"
			/>

		</div>

		<div
			:class="{
				'file-chooser form-control mx-0 mb-4 px-0': true,
				'busy image-loading': isBusy,
				'image-broken': isBroken
			}"
		>
			<input
				v-show="!isBusy"
				ref="imageinput"
				type="file"
				class="form-control-file"
				style="opacity:0;position:absolute;"
				enctype="multipart/form-data"
				title="Upload new image."
				@click.stop="$event => $emit('click', $event)"
				@change="processUpload"
			/>
			<div
				v-if="workingData"
				v-show="!isBusy"
				class="btn-group"
			>
				<!-- <button
					class="btn btn-primary btn-sm"
					type="button"
					@click.stop="$event => $emit('click', $event)"
				>
					Replace
				</button> -->
				<button
					:style="{ 'z-index': 13 }"
					class="btn btn-primary btn-sm"
					type="button"
					title="Clear image."
					@click.stop="clearImage"
				>
					Clear
				</button>
			</div>
			<button
				v-if="!workingData"
				@click.stop="$event => $emit('click', $event)"
				:class="{
					'btn btn-primary btn-sm btn-overlay mb-4': true,
					'text-danger' : isBroken
				}"
			>
				Upload
			</button>
		</div>


	</div>

</template>

<script>

	import IncludeEditorDefaults from '@mixins/IncludeEditorDefaults.js';

	export default {

		name: 'EditorImage',

		mixins: [
			IncludeEditorDefaults
		],

		data() {
			return {
			};
		},

		props: {

			'cropSize': {
				type: Object,
				required: false
			},

			'previewSize': {
				type: Object,
				required: false,
				default: null
			},

			// value is the url of existing image
			'value': {
				type: String,
				default: null
			}

		},

		data() {
			return {
				previewFit: 'cover',
				previewPosition: 'center',
				isBroken: false,
				isBusy: false,
				uploadStatus: null,
				uploadMessage: null,
				workingData: null, // base64 to be displayed and manipulated
				fileFormat: null, // [image/jpeg, image/png, image/gif]
				maxFilesize: 2 * 1024 * 1024
			};
		},

		computed: {

			inputValue() { // unused by this editor
				return null;
			},

			filesize() {
				if (!this.workingData || !this.fileFormat)
					return null;
				const head = `data:${this.fileFormat};base64,`;
				//this used to be *2.5, perhaps because jpg was being converted to png? but for base64 conversion, it should be 33% bigger now that we use the right type
				const size = Math.round((this.workingData.length - head.length) * 3/4);
				return size;
			},

			previewClasses() {
				let str = 'preview bg-dark';
				if(this.previewFit === 'contain') str += ' has-padding';
				return str;
			},

			previewDimensions() {
				const size = {
					width: 135,
					height: 55
				};
				if(this.previewSize)
					return _.merge(size, this.previewSize);
				return size;
			},

			previewStyles() {
				let width = String(this.previewDimensions.width);
				if(!isNaN(width.slice(-1)))
					width += 'px'; // ends with number
				let height = String(this.previewDimensions.height);
				if(!isNaN(height.slice(-1)))
					height += 'px'; // ends with number
				return {
					width, height
				};
			},

			imageForBackend: {
				get() {
					return this.value || null;
				},
				set(newVal) {
					if(newVal === null) {
						this.$refs.imageinput.value = ''; // clears file input so it will recognize @change in case where previous image cleared and re-uploaded
					}
					this.$emit('input', newVal);
				}
			},

			showEditControls() {
				return this.filesize !== null && this.filesize < this.maxFilesize;
			},

			cannotEditTooltip() {
				if (this.showEditControls)
					return "";
				return "Image too large to be rotated or flipped. Please download the image, edit it, and re-upload it.";
			},

			uploadTooltip() {
				if(this.workingData === null)
					return 'Upload image.';
				return 'Replace image.';
			},

			imageForBackendIsBase64() {
				if(this.value && this.value.startsWith('http'))
					return false;
				return true;
			}

		},

		mounted() {
			if (this.value)
				this.setWorkingDataFromUrl(this.value);
		},

		methods: {

			clearImage() {
				this.isBroken = false;
				this.imageForBackend = null;
				this.workingData = null;
				this.fileFormat = null;
			},

			clearStatus() {
				this.uploadStatus = null;
				this.uploadMessage = null;
			},

			readImageAsBase64(imageFile) {
				// no scaling or cropping, use natural image sizE
				// supports animated gifs
				const reader = new FileReader();
				reader.addEventListener('load', () => {
					const data = reader.result;
					this.workingData = data;
					this.imageForBackend = data;
					this.isBusy = false;
				}, false);
				if(reader.readAsDataURL) // this is the correct case of the function
					reader.readAsDataURL(imageFile);
				else // mozilla uses wrong case
					reader.readAsDataurl(imageFile);
			},

			convertImageToBase64(imageElement) {
				// crop image based on cropSize dimensions
				// does not support animated gifs
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');
				// natural width, height, and ratio correspond to the raw uploaded image
				const naturalWidth = imageElement.naturalWidth;
				const naturalHeight = imageElement.naturalHeight;
				const naturalRatio = naturalWidth / naturalHeight;
				// crop width defaults to the size of the actual image,
				// but can be overridden by a component property
				// if different than the natural dimensions
				// then we will scale down / up using the following logic
				// if image is landscape, it will scale the height to fit the crop height
				// and if image is portrait it will scale the width to fit the crop width
				const cropWidth = this.cropSize ? this.cropSize.width : naturalWidth;
				const cropHeight = this.cropSize ? this.cropSize.height : naturalHeight;
				canvas.width = cropWidth;
				canvas.height = cropHeight;
				const drawWidth = naturalRatio < 1 ? cropWidth : cropHeight * naturalRatio;
				const drawHeight = naturalRatio < 1 ? cropWidth / naturalRatio : cropHeight;
				const offsetLeft = (cropWidth - drawWidth) / 2;
				const offsetTop = (cropHeight - drawHeight) / 2;
				ctx.drawImage(imageElement, offsetLeft, offsetTop, drawWidth, drawHeight);
				return canvas.toDataURL(this.fileFormat);
			},

			processUpload(event) {
				this.isBusy = true;
				this.clearStatus();
				this.fileFormat = null;
				const file = event.target.files[0] || null;
				if(file) {
					const isLessThan2Megs = file.size / 1024 / 1024 < 2;
					switch(file.type) {
						case 'image/jpeg':
						case 'image/png':
						case 'image/gif':
							this.fileFormat = file.type;
							break;
					}

					// will eventually import validation rules from server spec
					if (!this.fileFormat) {
						this.setStatus('error', 'Image file must be JPG, PNG, or GIF format!');
					}

					else if (!isLessThan2Megs) {
						this.setStatus('error', 'Image size can not exceed 2MB!');
					}

					else if(!this.cropSize) {
						this.readImageAsBase64(file);
					}

					else {
						let preload = new Image();
						preload.crossOrigin = "anonymous";
						preload.src = URL.createObjectURL(file);
						preload.onload = () => {
							const data = this.convertImageToBase64(preload);
							this.workingData = data;
							this.imageForBackend = data;
							this.isBusy = false;
						};
					}
				}

				this.$refs.imageinput.blur();
			},

			setStatus(status, message) {
				this.uploadStatus = status;
				this.uploadMessage = message;
				this.isBusy = false;
			},

			triggerInputClick() {
				this.$refs.imageinput.click();
			},

			triggerDownload(url) {
				let filename = url.substring(url.lastIndexOf('/')+1);
				const a = document.createElement("a");
				a.href = url;
				a.download = filename;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			},

			flip({horizontal = false, vertical = false} = {}) {
				if(!this.workingData) return;
				this.isBusy = true;
				const img = new Image();
				img.crossOrigin = "anonymous";
				img.onload = () => {
					setTimeout(() => {
						const canvas = document.createElement('canvas');
						canvas.width = img.width;
						canvas.height = img.height;
						const ctx = canvas.getContext('2d');
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						ctx.translate(canvas.width/2, canvas.height/2);
						if (horizontal === true)
							ctx.scale(-1, 1);
						if (vertical === true)
							ctx.scale(1, -1);
						ctx.drawImage(img, -img.width/2, -img.height/2);
						this.isBusy = false;
						this.imageForBackend = canvas.toDataURL(this.fileFormat);
						this.workingData = canvas.toDataURL(this.fileFormat);
					}, 100);
				};
				img.src = this.workingData;
			},

			rotate(degrees=90) {
				if(!this.workingData) return;
				this.isBusy = true;
				const img = new Image();
				img.crossOrigin = "anonymous";
				img.onload = () => {
					let promise = new Promise((resolve) => {
						const reverseDimensions = Math.abs(degrees) === 90 || Math.abs(degrees) === 270;
						const canvas = document.createElement('canvas');
						canvas.width = !reverseDimensions ? img.width : img.height;
						canvas.height = !reverseDimensions ? img.height : img.width;
						const ctx = canvas.getContext('2d');
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						ctx.translate(canvas.width/2, canvas.height/2);
						ctx.rotate(degrees*Math.PI/180);
						ctx.drawImage(img, -img.width/2, -img.height/2);
						return resolve(canvas.toDataURL(this.fileFormat));
					});
					promise.then((data) => {
						this.isBusy = false;
						this.imageForBackend = data;
						this.workingData = data;
					});
				};
				setTimeout(() => {
					img.src = this.workingData;
				}, 100);
			},

			setWorkingDataFromUrl(url) {
				this.isBusy = true;
				this.isBroken = false;
				const pieces = url.split('.');
				const extension_plus = pieces.slice(-1)[0];
				const extension = extension_plus.split('?')[0]; // remove get params

				switch(extension) {
					case 'jpg':
					case 'jpeg':
						this.fileFormat = 'image/jpeg';
						break;
					case 'png':
						this.fileFormat = 'image/png';
						break;
					case 'gif':
						this.fileFormat = 'image/gif';
						break;
				}

				const img = new Image();
				img.crossOrigin = "anonymous";
				img.onload = () => {
					let promise = new Promise((resolve) => {
						// this promise stuff is required to make things load properly for some reason
						const canvas = document.createElement('canvas');
						canvas.height = img.naturalHeight;
						canvas.width = img.naturalWidth;
						const ctx = canvas.getContext('2d');
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						ctx.drawImage(img, 0, 0);
						return resolve(canvas.toDataURL(this.fileFormat));
					});
					promise.then((data) => {
						this.isBusy = false;
						this.workingData = data;
					}).catch(() => {
						this.busy = false;
					});
				};
				img.onerror = () => {
					this.isBroken = true;
					this.isBusy = false;
				};
				img.src = url;
			}
		}
	}

</script>

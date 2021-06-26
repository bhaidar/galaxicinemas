/*

	Imports and enables all BASE editors.

*/

import EditorBoolean from '@editors/base/EditorBoolean';
import EditorContent from '@editors/base/EditorContent';
import EditorDate from '@editors/base/EditorDate';
import EditorDatetime from '@editors/base/EditorDatetime';
import EditorImage from '@editors/base/EditorImage';
import EditorNumber from '@editors/base/EditorNumber';
import EditorSelect from '@editors/base/EditorSelect';
import EditorString from '@editors/base/EditorString';
import EditorTime from '@editors/base/EditorTime';

export default {

	components: {
		EditorBoolean,
		EditorContent,
		EditorDate,
		EditorDatetime,
		EditorImage,
		EditorNumber,
		EditorSelect,
		EditorString,
		EditorTime
	}

};

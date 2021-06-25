import moment from 'moment';

/*

	Serves as a wrapper for MomentJS library,
	and collection of date/time utility functions.

*/

class DateHelper {

	constructor() {
		
	}

	getHoursInTime(time) {
		return Math.floor(time/100);
	}

	getMinutesInTime(time) {
		const hours = Math.floor(time/100);
		return time - (hours*100);
	}

	getTotalMinutesInTime(time) {
		const hours = this.getHoursInTime(time);
		const minutes = this.getMinutesInTime(time);
		return (hours * 60) + minutes;
	}

	getFriendlyTimeFromTime(time) {
		const hours = Math.floor(time/100);
		const minutes = time - (hours*100);
		return hours +':'+ minutes;
	}

	getFriendlyHourFromTime(time) {
		const hour = Math.floor(time/100);
		const prefix = hour >= 12 ? 'pm' : 'am';
		const shortHour = hour >= 12 ? hour - 12 : hour;
		return shortHour === 0 ? 12+prefix : shortHour+prefix;
	}

}

const instance = new DateHelper();
Object.freeze(instance);
export default instance;

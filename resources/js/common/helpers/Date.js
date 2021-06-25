import moment from 'moment';

/*

	Several convenience functions below for converting
	things like 1330 to 1:30pm,
	or to figure out how many minutes total are in that time.

	Also a wrapper for MomentJS library for the stuff I didn't have time to write out,
	like figuring out what day of the week a specific date is.

*/

class DateHelper {

	constructor() {
		
	}

	getWeekdayFromDate(date) {
		const m = moment(date);
		return m.day();
	}

	getFriendlyDateFromDate(date) {
		const m = moment(date);
		return m.format('dddd[,] MMMM Do');
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

	getSuffixFromTime(time) {
		const hours = this.getHoursInTime(time);
		return hours >= 12 ? 'pm' : 'am';
	}

	getFriendlyHourFromTime(time) {
		const hours = this.getHoursInTime(time);
		const suffix = this.getSuffixFromTime(time);
		const shortHours = hours >= 12 ? hours - 12 : hours;
		return shortHours === 0 ? 12+suffix : shortHours+suffix;
	}

	getFriendlyTimeFromTime(time) {
		const hours = this.getHoursInTime(time);
		const minutes = this.getMinutesInTime(time);
		const suffix = this.getSuffixFromTime(time);
		const shortHours = hours >= 12 ? hours - 12 : hours;
		const filledMinutes = minutes < 10 ? '0'+minutes : ''+minutes;
		return shortHours +':'+ filledMinutes+suffix;
	}

}

const instance = new DateHelper();
Object.freeze(instance);
export default instance;

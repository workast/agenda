'use strict';

/**
 * Sets a job to repeat using a RRule
 * @name Job#rrule
 * @function
 * @param {Object} rrule RRule object
 * @param {Number} rrule.freq
 * @param {Date} rrule.dtstart
 * @param {Number} rrule.interval
 * @param {Number} rrule.wkst
 * @param {Number} rrule.count
 * @param {Date} rrule.until
 * @param {String} rrule.tzid
 * @param {(Number|Number[])} rrule.bysetpos
 * @param {(Number|Number[])} rrule.bymonth
 * @param {(Number|Number[])} rrule.bymonthday
 * @param {(Number|Number[])} rrule.byyearday
 * @param {(Number|Number[])} rrule.byweekno
 * @param {(Number|Number[])} rrule.byweekday
 * @param {(Number|Number[])} rrule.byhour
 * @param {(Number|Number[])} rrule.byminute
 * @param {(Number|Number[])} rrule.bysecond
 * @param {Object} options options to use for job
 * @param {Boolean} options.skipImmediate Flag to skip immediate run
 * @returns {Job} instance of Job
 */
module.exports = function(rrule, options = {}) {
  // If a native RRule object got passed, strip it to the bare minimum
  // to leave the document cleaner
  if (rrule.origOptions) {
    rrule = rrule.origOptions;
  }
  this.attrs.rrule = rrule;
  if (options.skipImmediate) {
    this.attrs.lastRunAt = new Date();
    this.computeNextRunAt();
    this.attrs.lastRunAt = undefined;
  }
  return this;
};

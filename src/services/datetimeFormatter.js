import moment from 'moment-timezone';

export const dateTimeFormatter = (input) => {

return moment(input).tz('Asia/Kuala_Lumpur').format('DD MMM YYYY hh:mm A')

}
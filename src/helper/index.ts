import moment from 'moment';

export const dateTransformer = (date: any) => moment(date).format("MM-DD-YYYY");

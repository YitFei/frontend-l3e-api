// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Teacher, Course, OnlineClassroom, Note, Timetable, Excercise, CourseSubcription, User, PaymentRecord } = initSchema(schema);

export {
  Teacher,
  Course,
  OnlineClassroom,
  Note,
  Timetable,
  Excercise,
  CourseSubcription,
  User,
  PaymentRecord
};
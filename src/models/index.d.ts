import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TeacherMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OnlineClassroomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TimetableMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExcerciseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CourseSubcriptionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PaymentRecordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Teacher {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly description?: string | null;
  readonly age?: number | null;
  readonly hasTeach?: (Course | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Teacher, TeacherMetaData>);
  static copyOf(source: Teacher, mutator: (draft: MutableModel<Teacher, TeacherMetaData>) => MutableModel<Teacher, TeacherMetaData> | void): Teacher;
}

export declare class Course {
  readonly id: string;
  readonly description?: string | null;
  readonly startDate?: string | null;
  readonly endDate: string;
  readonly hasOnlineClassroom?: OnlineClassroom | null;
  readonly courseCost: number;
  readonly active: boolean;
  readonly hasNotes?: (Note | null)[] | null;
  readonly teacherID?: string | null;
  readonly hasExcercise?: (Note | null)[] | null;
  readonly hasTimetable?: (Timetable | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly courseHasOnlineClassroomId?: string | null;
  constructor(init: ModelInit<Course, CourseMetaData>);
  static copyOf(source: Course, mutator: (draft: MutableModel<Course, CourseMetaData>) => MutableModel<Course, CourseMetaData> | void): Course;
}

export declare class OnlineClassroom {
  readonly id: string;
  readonly zoomUrl: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<OnlineClassroom, OnlineClassroomMetaData>);
  static copyOf(source: OnlineClassroom, mutator: (draft: MutableModel<OnlineClassroom, OnlineClassroomMetaData>) => MutableModel<OnlineClassroom, OnlineClassroomMetaData> | void): OnlineClassroom;
}

export declare class Note {
  readonly id: string;
  readonly name?: string | null;
  readonly url?: string | null;
  readonly validUntil?: string | null;
  readonly courseID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class Timetable {
  readonly id: string;
  readonly courseDate?: string | null;
  readonly courseStartTime?: string | null;
  readonly courseEndTime?: string | null;
  readonly isCancel?: boolean | null;
  readonly isFinish?: boolean | null;
  readonly courseID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Timetable, TimetableMetaData>);
  static copyOf(source: Timetable, mutator: (draft: MutableModel<Timetable, TimetableMetaData>) => MutableModel<Timetable, TimetableMetaData> | void): Timetable;
}

export declare class Excercise {
  readonly id: string;
  readonly name: string;
  readonly dateline?: string | null;
  readonly validUntil?: string | null;
  readonly url?: string | null;
  readonly description?: string | null;
  readonly courseID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Excercise, ExcerciseMetaData>);
  static copyOf(source: Excercise, mutator: (draft: MutableModel<Excercise, ExcerciseMetaData>) => MutableModel<Excercise, ExcerciseMetaData> | void): Excercise;
}

export declare class CourseSubcription {
  readonly id: string;
  readonly userID?: string | null;
  readonly course?: Course | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly courseSubcriptionCourseId?: string | null;
  constructor(init: ModelInit<CourseSubcription, CourseSubcriptionMetaData>);
  static copyOf(source: CourseSubcription, mutator: (draft: MutableModel<CourseSubcription, CourseSubcriptionMetaData>) => MutableModel<CourseSubcription, CourseSubcriptionMetaData> | void): CourseSubcription;
}

export declare class User {
  readonly id: string;
  readonly isActive: boolean;
  readonly hasSubscribe?: (CourseSubcription | null)[] | null;
  readonly hasMakePayment?: (CourseSubcription | null)[] | null;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class PaymentRecord {
  readonly id: string;
  readonly amount: number;
  readonly reference: string;
  readonly time: string;
  readonly userID?: string | null;
  readonly voided: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PaymentRecord, PaymentRecordMetaData>);
  static copyOf(source: PaymentRecord, mutator: (draft: MutableModel<PaymentRecord, PaymentRecordMetaData>) => MutableModel<PaymentRecord, PaymentRecordMetaData> | void): PaymentRecord;
}
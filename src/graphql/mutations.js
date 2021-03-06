/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInstitution = /* GraphQL */ `
  mutation CreateInstitution(
    $input: CreateInstitutionInput!
    $condition: ModelInstitutionConditionInput
  ) {
    createInstitution(input: $input, condition: $condition) {
      id
      institutionName
      academicYear
      adress
      email
      phone
      campuses {
        items {
          id
          campusName
          campusHead
          campusCity
          campusPhoneNumber
          campusEmailAddress
          campusAdress
          institutionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateInstitution = /* GraphQL */ `
  mutation UpdateInstitution(
    $input: UpdateInstitutionInput!
    $condition: ModelInstitutionConditionInput
  ) {
    updateInstitution(input: $input, condition: $condition) {
      id
      institutionName
      academicYear
      adress
      email
      phone
      campuses {
        items {
          id
          campusName
          campusHead
          campusCity
          campusPhoneNumber
          campusEmailAddress
          campusAdress
          institutionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteInstitution = /* GraphQL */ `
  mutation DeleteInstitution(
    $input: DeleteInstitutionInput!
    $condition: ModelInstitutionConditionInput
  ) {
    deleteInstitution(input: $input, condition: $condition) {
      id
      institutionName
      academicYear
      adress
      email
      phone
      campuses {
        items {
          id
          campusName
          campusHead
          campusCity
          campusPhoneNumber
          campusEmailAddress
          campusAdress
          institutionID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createNotifications = /* GraphQL */ `
  mutation CreateNotifications(
    $input: CreateNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    createNotifications(input: $input, condition: $condition) {
      id
      title
      description
      create_date
      create_time
      seen
      institutionID
      institution {
        id
        institutionName
        academicYear
        adress
        email
        phone
        campuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateNotifications = /* GraphQL */ `
  mutation UpdateNotifications(
    $input: UpdateNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    updateNotifications(input: $input, condition: $condition) {
      id
      title
      description
      create_date
      create_time
      seen
      institutionID
      institution {
        id
        institutionName
        academicYear
        adress
        email
        phone
        campuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteNotifications = /* GraphQL */ `
  mutation DeleteNotifications(
    $input: DeleteNotificationsInput!
    $condition: ModelNotificationsConditionInput
  ) {
    deleteNotifications(input: $input, condition: $condition) {
      id
      title
      description
      create_date
      create_time
      seen
      institutionID
      institution {
        id
        institutionName
        academicYear
        adress
        email
        phone
        campuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createEvents = /* GraphQL */ `
  mutation CreateEvents(
    $input: CreateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    createEvents(input: $input, condition: $condition) {
      id
      title
      description
      event_date
      event_place
      create_date
      create_time
      institutionID
      institution {
        id
        institutionName
        academicYear
        adress
        email
        phone
        campuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateEvents = /* GraphQL */ `
  mutation UpdateEvents(
    $input: UpdateEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    updateEvents(input: $input, condition: $condition) {
      id
      title
      description
      event_date
      event_place
      create_date
      create_time
      institutionID
      institution {
        id
        institutionName
        academicYear
        adress
        email
        phone
        campuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteEvents = /* GraphQL */ `
  mutation DeleteEvents(
    $input: DeleteEventsInput!
    $condition: ModelEventsConditionInput
  ) {
    deleteEvents(input: $input, condition: $condition) {
      id
      title
      description
      event_date
      event_place
      create_date
      create_time
      institutionID
      institution {
        id
        institutionName
        academicYear
        adress
        email
        phone
        campuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCampus = /* GraphQL */ `
  mutation CreateCampus(
    $input: CreateCampusInput!
    $condition: ModelCampusConditionInput
  ) {
    createCampus(input: $input, condition: $condition) {
      id
      campusName
      campusHead
      campusCity
      campusPhoneNumber
      campusEmailAddress
      campusAdress
      institutionID
      institution {
        id
        institutionName
        academicYear
        adress
        email
        phone
        campuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      faculties {
        items {
          id
          facultyName
          headofFaculty
          facultyPhoneNumber
          facultyEmailAddress
          facultyAdress
          campusID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCampus = /* GraphQL */ `
  mutation UpdateCampus(
    $input: UpdateCampusInput!
    $condition: ModelCampusConditionInput
  ) {
    updateCampus(input: $input, condition: $condition) {
      id
      campusName
      campusHead
      campusCity
      campusPhoneNumber
      campusEmailAddress
      campusAdress
      institutionID
      institution {
        id
        institutionName
        academicYear
        adress
        email
        phone
        campuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      faculties {
        items {
          id
          facultyName
          headofFaculty
          facultyPhoneNumber
          facultyEmailAddress
          facultyAdress
          campusID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCampus = /* GraphQL */ `
  mutation DeleteCampus(
    $input: DeleteCampusInput!
    $condition: ModelCampusConditionInput
  ) {
    deleteCampus(input: $input, condition: $condition) {
      id
      campusName
      campusHead
      campusCity
      campusPhoneNumber
      campusEmailAddress
      campusAdress
      institutionID
      institution {
        id
        institutionName
        academicYear
        adress
        email
        phone
        campuses {
          nextToken
        }
        createdAt
        updatedAt
      }
      faculties {
        items {
          id
          facultyName
          headofFaculty
          facultyPhoneNumber
          facultyEmailAddress
          facultyAdress
          campusID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFaculty = /* GraphQL */ `
  mutation CreateFaculty(
    $input: CreateFacultyInput!
    $condition: ModelFacultyConditionInput
  ) {
    createFaculty(input: $input, condition: $condition) {
      id
      facultyName
      headofFaculty
      facultyPhoneNumber
      facultyEmailAddress
      facultyAdress
      campusID
      campus {
        id
        campusName
        campusHead
        campusCity
        campusPhoneNumber
        campusEmailAddress
        campusAdress
        institutionID
        institution {
          id
          institutionName
          academicYear
          adress
          email
          phone
          createdAt
          updatedAt
        }
        faculties {
          nextToken
        }
        createdAt
        updatedAt
      }
      departments {
        items {
          id
          departmentName
          headofDepartment
          facultyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFaculty = /* GraphQL */ `
  mutation UpdateFaculty(
    $input: UpdateFacultyInput!
    $condition: ModelFacultyConditionInput
  ) {
    updateFaculty(input: $input, condition: $condition) {
      id
      facultyName
      headofFaculty
      facultyPhoneNumber
      facultyEmailAddress
      facultyAdress
      campusID
      campus {
        id
        campusName
        campusHead
        campusCity
        campusPhoneNumber
        campusEmailAddress
        campusAdress
        institutionID
        institution {
          id
          institutionName
          academicYear
          adress
          email
          phone
          createdAt
          updatedAt
        }
        faculties {
          nextToken
        }
        createdAt
        updatedAt
      }
      departments {
        items {
          id
          departmentName
          headofDepartment
          facultyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFaculty = /* GraphQL */ `
  mutation DeleteFaculty(
    $input: DeleteFacultyInput!
    $condition: ModelFacultyConditionInput
  ) {
    deleteFaculty(input: $input, condition: $condition) {
      id
      facultyName
      headofFaculty
      facultyPhoneNumber
      facultyEmailAddress
      facultyAdress
      campusID
      campus {
        id
        campusName
        campusHead
        campusCity
        campusPhoneNumber
        campusEmailAddress
        campusAdress
        institutionID
        institution {
          id
          institutionName
          academicYear
          adress
          email
          phone
          createdAt
          updatedAt
        }
        faculties {
          nextToken
        }
        createdAt
        updatedAt
      }
      departments {
        items {
          id
          departmentName
          headofDepartment
          facultyID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDepartment = /* GraphQL */ `
  mutation CreateDepartment(
    $input: CreateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    createDepartment(input: $input, condition: $condition) {
      id
      departmentName
      headofDepartment
      facultyID
      faculty {
        id
        facultyName
        headofFaculty
        facultyPhoneNumber
        facultyEmailAddress
        facultyAdress
        campusID
        campus {
          id
          campusName
          campusHead
          campusCity
          campusPhoneNumber
          campusEmailAddress
          campusAdress
          institutionID
          createdAt
          updatedAt
        }
        departments {
          nextToken
        }
        createdAt
        updatedAt
      }
      classes {
        items {
          id
          qualificationName
          qualificationLevel
          qualificationYear
          departmentID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDepartment = /* GraphQL */ `
  mutation UpdateDepartment(
    $input: UpdateDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    updateDepartment(input: $input, condition: $condition) {
      id
      departmentName
      headofDepartment
      facultyID
      faculty {
        id
        facultyName
        headofFaculty
        facultyPhoneNumber
        facultyEmailAddress
        facultyAdress
        campusID
        campus {
          id
          campusName
          campusHead
          campusCity
          campusPhoneNumber
          campusEmailAddress
          campusAdress
          institutionID
          createdAt
          updatedAt
        }
        departments {
          nextToken
        }
        createdAt
        updatedAt
      }
      classes {
        items {
          id
          qualificationName
          qualificationLevel
          qualificationYear
          departmentID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDepartment = /* GraphQL */ `
  mutation DeleteDepartment(
    $input: DeleteDepartmentInput!
    $condition: ModelDepartmentConditionInput
  ) {
    deleteDepartment(input: $input, condition: $condition) {
      id
      departmentName
      headofDepartment
      facultyID
      faculty {
        id
        facultyName
        headofFaculty
        facultyPhoneNumber
        facultyEmailAddress
        facultyAdress
        campusID
        campus {
          id
          campusName
          campusHead
          campusCity
          campusPhoneNumber
          campusEmailAddress
          campusAdress
          institutionID
          createdAt
          updatedAt
        }
        departments {
          nextToken
        }
        createdAt
        updatedAt
      }
      classes {
        items {
          id
          qualificationName
          qualificationLevel
          qualificationYear
          departmentID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      qualificationName
      qualificationLevel
      qualificationYear
      departmentID
      department {
        id
        departmentName
        headofDepartment
        facultyID
        faculty {
          id
          facultyName
          headofFaculty
          facultyPhoneNumber
          facultyEmailAddress
          facultyAdress
          campusID
          createdAt
          updatedAt
        }
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      modules {
        items {
          id
          moduleName
          courseCode
          teacherName
          coursePeriod
          courseCredit
          courseIsCompulsory
          courseDescription
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          studentFullname
          studentSurname
          studentPhoneNumber
          studentEmail
          studentNumber
          pending
          studentCampusName
          studentCampusID
          studentFacultyName
          studentFacultyID
          studentDepartmentName
          studentDepartmentID
          studentQualificationName
          studentQualificationID
          classID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      qualificationName
      qualificationLevel
      qualificationYear
      departmentID
      department {
        id
        departmentName
        headofDepartment
        facultyID
        faculty {
          id
          facultyName
          headofFaculty
          facultyPhoneNumber
          facultyEmailAddress
          facultyAdress
          campusID
          createdAt
          updatedAt
        }
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      modules {
        items {
          id
          moduleName
          courseCode
          teacherName
          coursePeriod
          courseCredit
          courseIsCompulsory
          courseDescription
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          studentFullname
          studentSurname
          studentPhoneNumber
          studentEmail
          studentNumber
          pending
          studentCampusName
          studentCampusID
          studentFacultyName
          studentFacultyID
          studentDepartmentName
          studentDepartmentID
          studentQualificationName
          studentQualificationID
          classID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      qualificationName
      qualificationLevel
      qualificationYear
      departmentID
      department {
        id
        departmentName
        headofDepartment
        facultyID
        faculty {
          id
          facultyName
          headofFaculty
          facultyPhoneNumber
          facultyEmailAddress
          facultyAdress
          campusID
          createdAt
          updatedAt
        }
        classes {
          nextToken
        }
        createdAt
        updatedAt
      }
      modules {
        items {
          id
          moduleName
          courseCode
          teacherName
          coursePeriod
          courseCredit
          courseIsCompulsory
          courseDescription
          classID
          createdAt
          updatedAt
        }
        nextToken
      }
      students {
        items {
          id
          studentFullname
          studentSurname
          studentPhoneNumber
          studentEmail
          studentNumber
          pending
          studentCampusName
          studentCampusID
          studentFacultyName
          studentFacultyID
          studentDepartmentName
          studentDepartmentID
          studentQualificationName
          studentQualificationID
          classID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createClassModule = /* GraphQL */ `
  mutation CreateClassModule(
    $input: CreateClassModuleInput!
    $condition: ModelClassModuleConditionInput
  ) {
    createClassModule(input: $input, condition: $condition) {
      id
      moduleName
      courseCode
      teacherName
      coursePeriod
      courseCredit
      courseIsCompulsory
      courseDescription
      classID
      class {
        id
        qualificationName
        qualificationLevel
        qualificationYear
        departmentID
        department {
          id
          departmentName
          headofDepartment
          facultyID
          createdAt
          updatedAt
        }
        modules {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      moduleChapters {
        items {
          id
          chapterName
          classModuleID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateClassModule = /* GraphQL */ `
  mutation UpdateClassModule(
    $input: UpdateClassModuleInput!
    $condition: ModelClassModuleConditionInput
  ) {
    updateClassModule(input: $input, condition: $condition) {
      id
      moduleName
      courseCode
      teacherName
      coursePeriod
      courseCredit
      courseIsCompulsory
      courseDescription
      classID
      class {
        id
        qualificationName
        qualificationLevel
        qualificationYear
        departmentID
        department {
          id
          departmentName
          headofDepartment
          facultyID
          createdAt
          updatedAt
        }
        modules {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      moduleChapters {
        items {
          id
          chapterName
          classModuleID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteClassModule = /* GraphQL */ `
  mutation DeleteClassModule(
    $input: DeleteClassModuleInput!
    $condition: ModelClassModuleConditionInput
  ) {
    deleteClassModule(input: $input, condition: $condition) {
      id
      moduleName
      courseCode
      teacherName
      coursePeriod
      courseCredit
      courseIsCompulsory
      courseDescription
      classID
      class {
        id
        qualificationName
        qualificationLevel
        qualificationYear
        departmentID
        department {
          id
          departmentName
          headofDepartment
          facultyID
          createdAt
          updatedAt
        }
        modules {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      moduleChapters {
        items {
          id
          chapterName
          classModuleID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createModuleChapter = /* GraphQL */ `
  mutation CreateModuleChapter(
    $input: CreateModuleChapterInput!
    $condition: ModelModuleChapterConditionInput
  ) {
    createModuleChapter(input: $input, condition: $condition) {
      id
      chapterName
      classModuleID
      classModule {
        id
        moduleName
        courseCode
        teacherName
        coursePeriod
        courseCredit
        courseIsCompulsory
        courseDescription
        classID
        class {
          id
          qualificationName
          qualificationLevel
          qualificationYear
          departmentID
          createdAt
          updatedAt
        }
        moduleChapters {
          nextToken
        }
        createdAt
        updatedAt
      }
      files {
        items {
          id
          name
          owner
          moduleChapterID
          createdAt
          updatedAt
        }
        nextToken
      }
      lessons {
        items {
          id
          lessonName
          moduleChapterID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateModuleChapter = /* GraphQL */ `
  mutation UpdateModuleChapter(
    $input: UpdateModuleChapterInput!
    $condition: ModelModuleChapterConditionInput
  ) {
    updateModuleChapter(input: $input, condition: $condition) {
      id
      chapterName
      classModuleID
      classModule {
        id
        moduleName
        courseCode
        teacherName
        coursePeriod
        courseCredit
        courseIsCompulsory
        courseDescription
        classID
        class {
          id
          qualificationName
          qualificationLevel
          qualificationYear
          departmentID
          createdAt
          updatedAt
        }
        moduleChapters {
          nextToken
        }
        createdAt
        updatedAt
      }
      files {
        items {
          id
          name
          owner
          moduleChapterID
          createdAt
          updatedAt
        }
        nextToken
      }
      lessons {
        items {
          id
          lessonName
          moduleChapterID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteModuleChapter = /* GraphQL */ `
  mutation DeleteModuleChapter(
    $input: DeleteModuleChapterInput!
    $condition: ModelModuleChapterConditionInput
  ) {
    deleteModuleChapter(input: $input, condition: $condition) {
      id
      chapterName
      classModuleID
      classModule {
        id
        moduleName
        courseCode
        teacherName
        coursePeriod
        courseCredit
        courseIsCompulsory
        courseDescription
        classID
        class {
          id
          qualificationName
          qualificationLevel
          qualificationYear
          departmentID
          createdAt
          updatedAt
        }
        moduleChapters {
          nextToken
        }
        createdAt
        updatedAt
      }
      files {
        items {
          id
          name
          owner
          moduleChapterID
          createdAt
          updatedAt
        }
        nextToken
      }
      lessons {
        items {
          id
          lessonName
          moduleChapterID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
      id
      lessonName
      moduleChapterID
      moduleChapter {
        id
        chapterName
        classModuleID
        classModule {
          id
          moduleName
          courseCode
          teacherName
          coursePeriod
          courseCredit
          courseIsCompulsory
          courseDescription
          classID
          createdAt
          updatedAt
        }
        files {
          nextToken
        }
        lessons {
          nextToken
        }
        createdAt
        updatedAt
      }
      lessonTimeTable {
        items {
          id
          lessonName
          day
          startTime
          endTime
          lessonID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
      id
      lessonName
      moduleChapterID
      moduleChapter {
        id
        chapterName
        classModuleID
        classModule {
          id
          moduleName
          courseCode
          teacherName
          coursePeriod
          courseCredit
          courseIsCompulsory
          courseDescription
          classID
          createdAt
          updatedAt
        }
        files {
          nextToken
        }
        lessons {
          nextToken
        }
        createdAt
        updatedAt
      }
      lessonTimeTable {
        items {
          id
          lessonName
          day
          startTime
          endTime
          lessonID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
      id
      lessonName
      moduleChapterID
      moduleChapter {
        id
        chapterName
        classModuleID
        classModule {
          id
          moduleName
          courseCode
          teacherName
          coursePeriod
          courseCredit
          courseIsCompulsory
          courseDescription
          classID
          createdAt
          updatedAt
        }
        files {
          nextToken
        }
        lessons {
          nextToken
        }
        createdAt
        updatedAt
      }
      lessonTimeTable {
        items {
          id
          lessonName
          day
          startTime
          endTime
          lessonID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLessonTimeTable = /* GraphQL */ `
  mutation CreateLessonTimeTable(
    $input: CreateLessonTimeTableInput!
    $condition: ModelLessonTimeTableConditionInput
  ) {
    createLessonTimeTable(input: $input, condition: $condition) {
      id
      lessonName
      day
      startTime
      endTime
      lessonID
      lesson {
        id
        lessonName
        moduleChapterID
        moduleChapter {
          id
          chapterName
          classModuleID
          createdAt
          updatedAt
        }
        lessonTimeTable {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLessonTimeTable = /* GraphQL */ `
  mutation UpdateLessonTimeTable(
    $input: UpdateLessonTimeTableInput!
    $condition: ModelLessonTimeTableConditionInput
  ) {
    updateLessonTimeTable(input: $input, condition: $condition) {
      id
      lessonName
      day
      startTime
      endTime
      lessonID
      lesson {
        id
        lessonName
        moduleChapterID
        moduleChapter {
          id
          chapterName
          classModuleID
          createdAt
          updatedAt
        }
        lessonTimeTable {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLessonTimeTable = /* GraphQL */ `
  mutation DeleteLessonTimeTable(
    $input: DeleteLessonTimeTableInput!
    $condition: ModelLessonTimeTableConditionInput
  ) {
    deleteLessonTimeTable(input: $input, condition: $condition) {
      id
      lessonName
      day
      startTime
      endTime
      lessonID
      lesson {
        id
        lessonName
        moduleChapterID
        moduleChapter {
          id
          chapterName
          classModuleID
          createdAt
          updatedAt
        }
        lessonTimeTable {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
      id
      name
      owner
      file {
        id
        bucket
        region
        key
      }
      moduleChapterID
      moduleChapter {
        id
        chapterName
        classModuleID
        classModule {
          id
          moduleName
          courseCode
          teacherName
          coursePeriod
          courseCredit
          courseIsCompulsory
          courseDescription
          classID
          createdAt
          updatedAt
        }
        files {
          nextToken
        }
        lessons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
      id
      name
      owner
      file {
        id
        bucket
        region
        key
      }
      moduleChapterID
      moduleChapter {
        id
        chapterName
        classModuleID
        classModule {
          id
          moduleName
          courseCode
          teacherName
          coursePeriod
          courseCredit
          courseIsCompulsory
          courseDescription
          classID
          createdAt
          updatedAt
        }
        files {
          nextToken
        }
        lessons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
      id
      name
      owner
      file {
        id
        bucket
        region
        key
      }
      moduleChapterID
      moduleChapter {
        id
        chapterName
        classModuleID
        classModule {
          id
          moduleName
          courseCode
          teacherName
          coursePeriod
          courseCredit
          courseIsCompulsory
          courseDescription
          classID
          createdAt
          updatedAt
        }
        files {
          nextToken
        }
        lessons {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      studentFullname
      studentSurname
      studentPhoneNumber
      studentEmail
      studentNumber
      pending
      studentCampusName
      studentCampusID
      studentFacultyName
      studentFacultyID
      studentDepartmentName
      studentDepartmentID
      studentQualificationName
      studentQualificationID
      classID
      class {
        id
        qualificationName
        qualificationLevel
        qualificationYear
        departmentID
        department {
          id
          departmentName
          headofDepartment
          facultyID
          createdAt
          updatedAt
        }
        modules {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
      id
      studentFullname
      studentSurname
      studentPhoneNumber
      studentEmail
      studentNumber
      pending
      studentCampusName
      studentCampusID
      studentFacultyName
      studentFacultyID
      studentDepartmentName
      studentDepartmentID
      studentQualificationName
      studentQualificationID
      classID
      class {
        id
        qualificationName
        qualificationLevel
        qualificationYear
        departmentID
        department {
          id
          departmentName
          headofDepartment
          facultyID
          createdAt
          updatedAt
        }
        modules {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
      id
      studentFullname
      studentSurname
      studentPhoneNumber
      studentEmail
      studentNumber
      pending
      studentCampusName
      studentCampusID
      studentFacultyName
      studentFacultyID
      studentDepartmentName
      studentDepartmentID
      studentQualificationName
      studentQualificationID
      classID
      class {
        id
        qualificationName
        qualificationLevel
        qualificationYear
        departmentID
        department {
          id
          departmentName
          headofDepartment
          facultyID
          createdAt
          updatedAt
        }
        modules {
          nextToken
        }
        students {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSuperAdmin = /* GraphQL */ `
  mutation CreateSuperAdmin(
    $input: CreateSuperAdminInput!
    $condition: ModelSuperAdminConditionInput
  ) {
    createSuperAdmin(input: $input, condition: $condition) {
      id
      username
      email
      name
      family_name
      phone_number
      createdAt
      updatedAt
    }
  }
`;
export const updateSuperAdmin = /* GraphQL */ `
  mutation UpdateSuperAdmin(
    $input: UpdateSuperAdminInput!
    $condition: ModelSuperAdminConditionInput
  ) {
    updateSuperAdmin(input: $input, condition: $condition) {
      id
      username
      email
      name
      family_name
      phone_number
      createdAt
      updatedAt
    }
  }
`;
export const deleteSuperAdmin = /* GraphQL */ `
  mutation DeleteSuperAdmin(
    $input: DeleteSuperAdminInput!
    $condition: ModelSuperAdminConditionInput
  ) {
    deleteSuperAdmin(input: $input, condition: $condition) {
      id
      username
      email
      name
      family_name
      phone_number
      createdAt
      updatedAt
    }
  }
`;
export const createTeacher = /* GraphQL */ `
  mutation CreateTeacher(
    $input: CreateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    createTeacher(input: $input, condition: $condition) {
      id
      username
      email
      teacherFullName
      teacherSurname
      teacherGender
      teacherCampusName
      teacherDepartmentName
      teacherQualificationName
      teacherCourseName
      role
      createdAt
      updatedAt
    }
  }
`;
export const updateTeacher = /* GraphQL */ `
  mutation UpdateTeacher(
    $input: UpdateTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    updateTeacher(input: $input, condition: $condition) {
      id
      username
      email
      teacherFullName
      teacherSurname
      teacherGender
      teacherCampusName
      teacherDepartmentName
      teacherQualificationName
      teacherCourseName
      role
      createdAt
      updatedAt
    }
  }
`;
export const deleteTeacher = /* GraphQL */ `
  mutation DeleteTeacher(
    $input: DeleteTeacherInput!
    $condition: ModelTeacherConditionInput
  ) {
    deleteTeacher(input: $input, condition: $condition) {
      id
      username
      email
      teacherFullName
      teacherSurname
      teacherGender
      teacherCampusName
      teacherDepartmentName
      teacherQualificationName
      teacherCourseName
      role
      createdAt
      updatedAt
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      author
      body
      createdAt
      updatedAt
    }
  }
`;

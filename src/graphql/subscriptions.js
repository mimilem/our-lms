/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInstitution = /* GraphQL */ `
  subscription OnCreateInstitution {
    onCreateInstitution {
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
export const onUpdateInstitution = /* GraphQL */ `
  subscription OnUpdateInstitution {
    onUpdateInstitution {
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
export const onDeleteInstitution = /* GraphQL */ `
  subscription OnDeleteInstitution {
    onDeleteInstitution {
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
export const onCreateCampus = /* GraphQL */ `
  subscription OnCreateCampus {
    onCreateCampus {
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
export const onUpdateCampus = /* GraphQL */ `
  subscription OnUpdateCampus {
    onUpdateCampus {
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
export const onDeleteCampus = /* GraphQL */ `
  subscription OnDeleteCampus {
    onDeleteCampus {
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
export const onCreateFaculty = /* GraphQL */ `
  subscription OnCreateFaculty {
    onCreateFaculty {
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
export const onUpdateFaculty = /* GraphQL */ `
  subscription OnUpdateFaculty {
    onUpdateFaculty {
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
export const onDeleteFaculty = /* GraphQL */ `
  subscription OnDeleteFaculty {
    onDeleteFaculty {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
export const onCreateClass = /* GraphQL */ `
  subscription OnCreateClass {
    onCreateClass {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateClass = /* GraphQL */ `
  subscription OnUpdateClass {
    onUpdateClass {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteClass = /* GraphQL */ `
  subscription OnDeleteClass {
    onDeleteClass {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateClassModule = /* GraphQL */ `
  subscription OnCreateClassModule {
    onCreateClassModule {
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
export const onUpdateClassModule = /* GraphQL */ `
  subscription OnUpdateClassModule {
    onUpdateClassModule {
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
export const onDeleteClassModule = /* GraphQL */ `
  subscription OnDeleteClassModule {
    onDeleteClassModule {
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
export const onCreateModuleChapter = /* GraphQL */ `
  subscription OnCreateModuleChapter {
    onCreateModuleChapter {
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
export const onUpdateModuleChapter = /* GraphQL */ `
  subscription OnUpdateModuleChapter {
    onUpdateModuleChapter {
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
export const onDeleteModuleChapter = /* GraphQL */ `
  subscription OnDeleteModuleChapter {
    onDeleteModuleChapter {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
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
export const onCreateLessonTimeTable = /* GraphQL */ `
  subscription OnCreateLessonTimeTable {
    onCreateLessonTimeTable {
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
export const onUpdateLessonTimeTable = /* GraphQL */ `
  subscription OnUpdateLessonTimeTable {
    onUpdateLessonTimeTable {
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
export const onDeleteLessonTimeTable = /* GraphQL */ `
  subscription OnDeleteLessonTimeTable {
    onDeleteLessonTimeTable {
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
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile($owner: String!) {
    onCreateFile(owner: $owner) {
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
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile($owner: String!) {
    onUpdateFile(owner: $owner) {
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
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile($owner: String!) {
    onDeleteFile(owner: $owner) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent {
    onCreateStudent {
      id
      studentFullname
      studentSurname
      studentPhoneNumber
      studentEmail
      studentCampusName
      studentDepartmentName
      studentYear
      pending
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent {
    onUpdateStudent {
      id
      studentFullname
      studentSurname
      studentPhoneNumber
      studentEmail
      studentCampusName
      studentDepartmentName
      studentYear
      pending
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent {
    onDeleteStudent {
      id
      studentFullname
      studentSurname
      studentPhoneNumber
      studentEmail
      studentCampusName
      studentDepartmentName
      studentYear
      pending
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSuperAdmin = /* GraphQL */ `
  subscription OnCreateSuperAdmin($username: String) {
    onCreateSuperAdmin(username: $username) {
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
export const onUpdateSuperAdmin = /* GraphQL */ `
  subscription OnUpdateSuperAdmin($username: String) {
    onUpdateSuperAdmin(username: $username) {
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
export const onDeleteSuperAdmin = /* GraphQL */ `
  subscription OnDeleteSuperAdmin($username: String) {
    onDeleteSuperAdmin(username: $username) {
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
export const onCreateTeacher = /* GraphQL */ `
  subscription OnCreateTeacher($username: String) {
    onCreateTeacher(username: $username) {
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
export const onUpdateTeacher = /* GraphQL */ `
  subscription OnUpdateTeacher($username: String) {
    onUpdateTeacher(username: $username) {
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
export const onDeleteTeacher = /* GraphQL */ `
  subscription OnDeleteTeacher($username: String) {
    onDeleteTeacher(username: $username) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
      id
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
      id
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
      id
      author
      body
      createdAt
      updatedAt
    }
  }
`;

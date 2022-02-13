/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCampus = /* GraphQL */ `
  query GetCampus($id: ID!) {
    getCampus(id: $id) {
      id
      institutionName
      campusName
      faculties {
        items {
          id
          facultyName
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
export const listCampuss = /* GraphQL */ `
  query ListCampuss(
    $filter: ModelCampusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCampuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        institutionName
        campusName
        faculties {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFaculty = /* GraphQL */ `
  query GetFaculty($id: ID!) {
    getFaculty(id: $id) {
      id
      facultyName
      campusID
      campus {
        id
        institutionName
        campusName
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
export const listFacultys = /* GraphQL */ `
  query ListFacultys(
    $filter: ModelFacultyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacultys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        facultyName
        campusID
        campus {
          id
          institutionName
          campusName
          createdAt
          updatedAt
        }
        departments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
      id
      departmentName
      facultyID
      faculty {
        id
        facultyName
        campusID
        campus {
          id
          institutionName
          campusName
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
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        departmentName
        facultyID
        faculty {
          id
          facultyName
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
      nextToken
    }
  }
`;
export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
      id
      qualificationName
      qualificationLevel
      qualificationYear
      departmentID
      department {
        id
        departmentName
        facultyID
        faculty {
          id
          facultyName
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
export const listClasss = /* GraphQL */ `
  query ListClasss(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        qualificationName
        qualificationLevel
        qualificationYear
        departmentID
        department {
          id
          departmentName
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
      nextToken
    }
  }
`;
export const getClassModule = /* GraphQL */ `
  query GetClassModule($id: ID!) {
    getClassModule(id: $id) {
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
export const listClassModules = /* GraphQL */ `
  query ListClassModules(
    $filter: ModelClassModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClassModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getModuleChapter = /* GraphQL */ `
  query GetModuleChapter($id: ID!) {
    getModuleChapter(id: $id) {
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
export const listModuleChapters = /* GraphQL */ `
  query ListModuleChapters(
    $filter: ModelModuleChapterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModuleChapters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getLessonTimeTable = /* GraphQL */ `
  query GetLessonTimeTable($id: ID!) {
    getLessonTimeTable(id: $id) {
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
export const listLessonTimeTables = /* GraphQL */ `
  query ListLessonTimeTables(
    $filter: ModelLessonTimeTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonTimeTables(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
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
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSuperAdmin = /* GraphQL */ `
  query GetSuperAdmin($id: ID!) {
    getSuperAdmin(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
    }
  }
`;
export const listSuperAdmins = /* GraphQL */ `
  query ListSuperAdmins(
    $filter: ModelSuperAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSuperAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      author
      body
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author
        body
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

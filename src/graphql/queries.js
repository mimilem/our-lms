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
          classYear
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
      classYear
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
        classYear
        departmentID
        department {
          id
          departmentName
          facultyID
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

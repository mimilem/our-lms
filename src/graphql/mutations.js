/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCampus = /* GraphQL */ `
  mutation CreateCampus(
    $input: CreateCampusInput!
    $condition: ModelCampusConditionInput
  ) {
    createCampus(input: $input, condition: $condition) {
      id
      institutionName
      campusName
      faculties {
        items {
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
      institutionName
      campusName
      faculties {
        items {
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
      institutionName
      campusName
      faculties {
        items {
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
      campusID
      campus {
        id
        institutionName
        campusName
        faculties {
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
        createdAt
        updatedAt
      }
      departments {
        items {
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
      campusID
      campus {
        id
        institutionName
        campusName
        faculties {
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
        createdAt
        updatedAt
      }
      departments {
        items {
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
      campusID
      campus {
        id
        institutionName
        campusName
        faculties {
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
        createdAt
        updatedAt
      }
      departments {
        items {
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
      facultyID
      faculty {
        id
        facultyName
        campusID
        campus {
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
        departments {
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
              classID
              createdAt
              updatedAt
            }
            nextToken
          }
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
      facultyID
      faculty {
        id
        facultyName
        campusID
        campus {
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
        departments {
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
              classID
              createdAt
              updatedAt
            }
            nextToken
          }
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
      facultyID
      faculty {
        id
        facultyName
        campusID
        campus {
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
        departments {
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
              classID
              createdAt
              updatedAt
            }
            nextToken
          }
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
        facultyID
        faculty {
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
        classes {
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
        createdAt
        updatedAt
      }
      modules {
        items {
          id
          moduleName
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
        facultyID
        faculty {
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
        classes {
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
        createdAt
        updatedAt
      }
      modules {
        items {
          id
          moduleName
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
        facultyID
        faculty {
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
        classes {
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
        createdAt
        updatedAt
      }
      modules {
        items {
          id
          moduleName
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
        modules {
          items {
            id
            moduleName
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
        createdAt
        updatedAt
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
        modules {
          items {
            id
            moduleName
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
        createdAt
        updatedAt
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
        modules {
          items {
            id
            moduleName
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
        modules {
          items {
            id
            moduleName
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        modules {
          items {
            id
            moduleName
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
        modules {
          items {
            id
            moduleName
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

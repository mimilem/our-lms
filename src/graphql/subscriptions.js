/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCampus = /* GraphQL */ `
  subscription OnCreateCampus {
    onCreateCampus {
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
export const onUpdateCampus = /* GraphQL */ `
  subscription OnUpdateCampus {
    onUpdateCampus {
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
export const onDeleteCampus = /* GraphQL */ `
  subscription OnDeleteCampus {
    onDeleteCampus {
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
export const onCreateFaculty = /* GraphQL */ `
  subscription OnCreateFaculty {
    onCreateFaculty {
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
export const onUpdateFaculty = /* GraphQL */ `
  subscription OnUpdateFaculty {
    onUpdateFaculty {
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
export const onDeleteFaculty = /* GraphQL */ `
  subscription OnDeleteFaculty {
    onDeleteFaculty {
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
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
export const onCreateClassModule = /* GraphQL */ `
  subscription OnCreateClassModule {
    onCreateClassModule {
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
export const onUpdateClassModule = /* GraphQL */ `
  subscription OnUpdateClassModule {
    onUpdateClassModule {
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
export const onDeleteClassModule = /* GraphQL */ `
  subscription OnDeleteClassModule {
    onDeleteClassModule {
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

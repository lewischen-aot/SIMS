export interface InstitutionUserTypeAndRoleResponseDto {
  userTypes: string[];
  userRoles: string[];
}

export interface InstitutionUserPermissionDto {
  permissions: {
    userType: string;
    locationId: number;
    userRole?: string;
  }[];
}

export interface UserRoleOptionDTO {
  name: string;
  code: string;
}

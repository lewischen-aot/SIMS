export interface MSFAAFileResultDto {
  generatedFile: string;
  uploadedRecords: number;
}

export interface MSFAARequestResultDto extends MSFAAFileResultDto {
  offeringIntensity: string;
}

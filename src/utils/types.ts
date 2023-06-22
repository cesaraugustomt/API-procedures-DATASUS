export type CreateProcedureParams = {
  company_id: number;
  code_id: string;
  procedure_name: string;
  value: number;
  treatment_type: string;
  procedure_description: string;
  procedure_image: string;
};

export type UpdateProcedureParams = {
  code_id: string;
  procedure_name: string;
  value: number;
  treatment_type: string;
  procedure_description: string;
  procedure_image: string;
};

export type CreateProductParams = {
  company_id: number;
  code_id: string;
  product_name: string;
  value: number;
  product_type: string;
  product_description: string;
  product_image: string;
};

export type UpdateProductParams = {
  code_id: string;
  product_name: string;
  value: number;
  product_type: string;
  product_description: string;
  product_image: string;
};

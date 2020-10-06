export interface IInjectionSearchState {
  order_no: string;
  product_name: string;
}

export interface IInjectionProcess {
  asset_no: string;
  id: number;
  material_name: string;
  order_id: number;
  order_no: string;
  product_id: number;
  product_name: string;
  qty: number;
  unit: string;
}

export interface IInjectionRegister {
  order_id: number;
  process_order_id: number;
  product_id: number;
  defect_id: number;
  qty: number;
}

export interface PaintingSearchState {
  order_no: string;
  product_name: string;
}

export interface PaintingProcess {
  asset_no: string;
  id: number;
  material_name: string;
  order_id: number;
  order_no: string;
  product_id: number;
  product_name: string;
  process_code?: string;
  qty: number;
  unit: string;
  type: string;
}

export interface PaintingRegister {
  order_id: number;
  process_order_id: number;
  product_id: number;
  defect_id: number;
  qty: number;
}

export interface AssembleOrder {
  order_id: number;
  order_no: string;
  type: string;
  id: number;
  product_id: number;
  product_name: string;
}

export interface AssembleRegister {
  order_id: number;
  process_order_id: number;
  product_id: number;
  defect_id: number;
  qty: number;
}

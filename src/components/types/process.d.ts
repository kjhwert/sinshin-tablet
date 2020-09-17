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

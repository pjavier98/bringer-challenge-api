import { IsString } from 'class-validator';

export class TrackingEventsRequest {
  @IsString({ message: 'Tracking number should be valid' })
  trackingNumber: string;
}

export class TrackingEventsResponse {
  id: number;
  status: string;
  uid: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  label_id: number;
  parcel_id: number;
  service_id: number;
  label: Label;
  parcel_tracking_items: ParcelTrackingItem[];
}

export class Label {
  id: number;
  tracking_number: string;
  external_tracking_number: string;
  history: string;
  received_for_shipping_actions_sync: boolean;
  model: string;
  uid: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  external_service_provider_id: number;
  external_service_id: null;
}

export class ParcelTrackingItem {
  id: number;
  location: null | string;
  city: null | string;
  state: null | string;
  postalCode: null | string;
  timestamp: Date;
  data: null;
  isNotified: boolean;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  parcelTrackingQueueId: number;
  parcelTrackingDestinationId: number | null;
  countryId: number;
  trackingCodeVendorId: number | null;
  trackingCodeId: number | null;
  userId: null;
  country: Country;
  tracking_code_vendor: TrackingCodeVendor | null;
  tracking_code: TrackingCode | null;
}

export class Country {
  id: number;
  name: string;
  isoCode: string;
  isoCode3: string;
  isoNumeric: number;
  fips: string;
  capital: string;
  areaSqKm: number;
  population: number;
  continent: string;
  tld: string;
  currencyCode: string;
  currencyName: string;
  postalCodeFormat: string;
  postalCodeRegex: string;
  languages: string;
  equivalentFipsCode: string;
  phoneNumberPrefix: string;
  allowShipFrom: boolean | number;
  allowShipTo: boolean | number;
  allowPickup: boolean | number;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

export class TrackingCode {
  id: number;
  code: string;
  isVisible: boolean;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  tracking_code_locales: TrackingCodeLocale[];
}

export class TrackingCodeLocale {
  id: number;
  description: string;
  details: null | string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  trackingCodeId?: number;
  localeId: number;
  locale: Locale;
  clientMustKnow?: null | string;
  trackingCodeVendorId?: number;
}

export class Locale {
  id: number;
  name: string;
  isoCode: string;
  active: boolean;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
}

export class TrackingCodeVendor {
  id: number;
  code: string;
  data: null | string;
  uid: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  trackingCodeId: number;
  externalServiceProviderId: number;
  tracking_code_vendor_locales: TrackingCodeLocale[];
  tracking_code: TrackingCode;
}

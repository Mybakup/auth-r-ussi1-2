export interface AppointmentRequest {
  id: string;
  patient: {
    name: string;
    age: number;
    gender: string;
    imageUrl: string;
    languages: string[];
  };
  proposedDate: string;
  proposedTime: string;
  alternativeDates: string[];
  type: string;
  status: 'pending' | 'confirmed' | 'rejected' | 'waiting' | 'in_progress';
  isFirstVisit: boolean;
  pathologyType: 'ponctuelle' | 'recurrente';
  contact: {
    phone: string;
    email: string;
  };
  source: {
    type: 'hotel' | 'agency' | 'insurance';
    name: string;
  };
}
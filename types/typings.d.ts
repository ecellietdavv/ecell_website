type StoreState = {
  darkMode: boolean;
  openDrawer: boolean;
  openModal: boolean;
  modalContent: { name: string; body: string };
};

enum StoreActionType {
  DARK_MODE_ON = 'DARK_MODE_ON',
  DARK_MODE_OFF = 'DARK_MODE_OFF',
  CLOSE_DRAWER = 'CLOSE_DRAWER',
  OPEN_DRAWER = 'OPEN_DRAWER',
  CLOSE_MODAL = 'CLOSE_MODAL',
  OPEN_MODAL = 'OPEN_MODAL',
  SET_MODAL_CONTENT = 'SET_MODAL_CONTENT',
}

type StoreAction = {
  type: StoreActionType;
  payload: number;
};

type RegistrationValues = {
  name: string;
  email: string;
  profession: string;
  collage: string;
  hasStartup: boolean;
  stage: string;
};

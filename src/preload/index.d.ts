import { ElectronAPI } from "@electron-toolkit/preload";

declare global {
  interface Window {
    electron: ElectronAPI;
    api: unknown;
    electronAPI: {
      saveFormData: (data: Record<string, any>) => void;
    };
  }
}

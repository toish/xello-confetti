import { Mesh, Vector3, MeshBasicMaterialParameters, Color } from 'three'
import { ConfettiParticle } from 'Scene/ConfettiParticle';

declare var __webpack_public_path__: string;
declare module "worker-loader!*" {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}

export type ValueOf<T> = T[keyof T]

export interface ConfettiParticleFrame {
  meshId: keyof ConfettiParticles;
  vector: Vector3;
  frame: {
    position: {
      x: number;
      y: number;
      z: number;
    };
    rotation: {
      x: number;
      y: number;
      z: number;
    };
    flags: {
      remove: boolean;
    }
  }
}

export interface ConfettiParticles {
  [objectId: string]: ConfettiParticle;
}

export type TextureID = string;

export interface ConfettiTextureRef {
  id: TextureID,
  url: string
}

export interface ConfettiMaterial {
  textureMap?: TextureID;
  alphaMap?: TextureID;
  colour?: string | number | Color;
}

export interface ConfettiTheme {
  size: {
    base: number;
    ratio: number;
    variance: number;
  },
  textures: ConfettiTextureRef[],
  materials: ConfettiMaterial[];
}

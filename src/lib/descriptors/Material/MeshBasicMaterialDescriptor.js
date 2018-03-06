import * as THREE from 'three';
import PropTypes from 'prop-types';

import MaterialDescriptorBase from './MaterialDescriptorBase';

class MeshBasicMaterialDescriptor extends MaterialDescriptorBase {
  constructor(react3RendererInstance) {
    super(react3RendererInstance);

    this.hasColor();
    this.hasWireframe();
    this.hasMap();
    this.hasMap('aoMap');
    this.hasMap('specularMap');
    this.hasMap('alphaMap');
    this.hasMap('envMap');

    this.hasProp('onBeforeCompile', {
      type: PropTypes.func,
      simple: true,
      default: undefined,
    });
  }

  construct(props) {
    const materialDescription = this.getMaterialDescription(props);

    return new THREE.MeshBasicMaterial(materialDescription);
  }
}

module.exports = MeshBasicMaterialDescriptor;

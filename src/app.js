import {
  registerBpmnJSPlugin,
  registerBpmnJSModdleExtension,
  registerCloudBpmnJSPlugin
} from 'camunda-modeler-plugin-helpers';

//import BpmnModeler from 'bpmn-js/lib/Modeler';

import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule
} from 'bpmn-js-properties-panel';

import magicPropertiesProviderModule from './provider/magic';
import magicModdleDescriptor from './descriptors/magic.json';


// Register additional modules as plugins
//registerBpmnJSPlugin(BpmnPropertiesPanelModule);
//registerBpmnJSPlugin(BpmnPropertiesProviderModule);
registerCloudBpmnJSPlugin(magicPropertiesProviderModule);

// Register Moddle extensions
registerBpmnJSModdleExtension(magicModdleDescriptor);

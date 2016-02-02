export default {
	// component lifecycle
	LIFECYCLE_UNMOUNTED: 'Unmounted',
	LIFECYCLE_MOUNTING: 'Mounting',
	LIFECYCLE_MOUNTED: 'Mounted',
	LIFECYCLE_UNINITIALIZED: 'Uninitialized',

	// patch types
	PATCH_ELEMENT_ASH_NODE: 'Patch Element Ash Node',
	PATCH_TEXT_ASH_NODE: 'Patch Text Ash Node',
	PATCH_PROPERTIES: 'Patch Properties',
	PATCH_ORDER: 'Patch Order',
	PATCH_INSERT: 'Patch Insert',
	PATCH_REMOVE: 'Patch Remove',

	// AshElement types
	COMPONENT_ASH_ELEMENT: 'Component Ash Element',
	ASH_NODE_ASH_ELEMENT: 'Ash Node Ash Element',
	FUNCTION_ASH_ELEMENT: 'Function Ash Element',

	// AshNode types
	TEXT_ASH_NODE: 'Text Ash Node',
	ELEMENT_ASH_NODE: 'Element Ash Node',

	// misc
	INDEX_SEPARATOR: '.',
	ID_ATTRIBUTE_NAME: '__ash:id__',
	INDEX_ATTRIBUTE_NAME: '__ash:index__',
	STREAM_ID_ATTRIBUTE_NAME: '__ash:stream__',

	// platform
	CLIENT_PLATFORM: 'client',
	SERVER_PLATFORM: 'server'
};

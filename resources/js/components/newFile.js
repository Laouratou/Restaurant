// Ton code JavaScript ici, si nécessaire
export default (() => {
const __VLS_setup = async () => {
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
// Composant Vue.js
});

const __VLS_componentsOption = {};

let __VLS_name!: 'EnseignantComponent';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {};
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-6"), };
{
({} as JSX.IntrinsicElements).h1;
({} as JSX.IntrinsicElements).h1;
(__VLS_x as JSX.IntrinsicElements)['h1'] = { class: ("custom-title mt-4 "), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-6 pt-5 "), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row container"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-6"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("d-flex "), };
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("btn btn-primary custom-btn rounded-pill px-4 mr-2"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("fas fa-arrow-left"), };
}
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("fas fa-arrow-right"), };
}
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("btn btn-primary custom-btn rounded-pill px-4"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("fas fa-chevron-right"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-6"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("d-flex  "), };
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("btn btn-outline-secondary custom-btn rounded-pill px-4 mr-2"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("fas fa-times "), };
}
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("btn btn-outline-danger custom-btn rounded-pill px-4 mr-2"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("fas fa-trash-alt "), };
}
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("btn btn-outline-success custom-btn rounded-pill px-4 mr-2"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("fas fa-plus "), };
}
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("btn btn-primary custom-btn rounded-pill px-4 mr-2"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("fas fa-check "), };
}
}
}
}
}
}
}
{
({} as JSX.IntrinsicElements).h5;
({} as JSX.IntrinsicElements).h5;
(__VLS_x as JSX.IntrinsicElements)['h5'] = { class: ("ml-3 mt-1"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("container "), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-4"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("form-group custom-form-group"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("matriculeSelect"), class: ("custom-label"), };
}
{
({} as JSX.IntrinsicElements).select;
({} as JSX.IntrinsicElements).select;
(__VLS_x as JSX.IntrinsicElements)['select'] = { class: ("form-select custom-select"), id: ("matriculeSelect"), style: ({}), };
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = {};
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = {};
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-4"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("form-group custom-form-group "), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("nomSelect"), class: ("custom-label"), };
}
{
({} as JSX.IntrinsicElements).select;
({} as JSX.IntrinsicElements).select;
(__VLS_x as JSX.IntrinsicElements)['select'] = { class: ("form-select custom-select"), id: ("nomSelect"), style: ({}), };
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = {};
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = {};
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-4 d-flex align-items-center"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("form-check form-switch custom-checkbox"), };
{
({} as JSX.IntrinsicElements).input;
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { class: ("form-check-input"), type: ("checkbox"), id: ("flexSwitchCheckDefault"), };
}
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { class: ("form-check-label"), for: ("flexSwitchCheckDefault"), };
}
}
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { class: ("btn btn-success timezone-button"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("py-4"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-6 "), };
{
({} as JSX.IntrinsicElements).form;
({} as JSX.IntrinsicElements).form;
(__VLS_x as JSX.IntrinsicElements)['form'] = { class: ("p-4 rounded form-container mx-auto"), style: ({}), };
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("mb-4 text-center"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-6"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row mb-3"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("champ1"), class: ("col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("bi bi-card-text mr-2"), };
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("d-none d-md-inline"), };
}
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("form-control w-50 ml-2"), id: ("champ1"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row mb-3"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("champ2"), class: ("col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("bi bi-person mr-2"), };
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("d-none d-md-inline"), };
}
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("form-control ml-2 w-50"), id: ("champ2"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row mb-3"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("champ3"), class: ("col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("bi bi-person mr-2"), };
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("d-none d-md-inline"), };
}
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("form-control w-50 ml-2"), id: ("champ3"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row mb-3"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("champ4"), class: ("col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("bi bi-calendar"), };
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("d-none d-md-inline "), };
}
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("date"), class: ("form-control w-50 ml-2"), id: ("champ4"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-6"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row mb-3"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("champ5"), class: ("col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("bi bi-geo-alt mr-2"), };
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("d-none d-md-inline"), };
}
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("form-control w-50 ml-2"), id: ("champ5"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row mb-3"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("champ6"), class: ("col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("bi bi-gender"), };
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("d-none d-md-inline"), };
}
}
{
({} as JSX.IntrinsicElements).select;
({} as JSX.IntrinsicElements).select;
(__VLS_x as JSX.IntrinsicElements)['select'] = { class: ("form-select w-50 ml-2 rounded-pill"), id: ("champ6"), };
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: (""), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("homme"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("femme"), };
}
{
({} as JSX.IntrinsicElements).option;
({} as JSX.IntrinsicElements).option;
(__VLS_x as JSX.IntrinsicElements)['option'] = { value: ("autre"), };
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row mb-3"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("champ7"), class: ("col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("bi bi-person-check"), };
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("d-none d-md-inline"), };
}
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("form-control w-50 ml-2"), id: ("champ7"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row mb-3"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("champ8"), class: ("col-4 col-md-3 col-lg-2 border rounded-pill px-5 py-2 d-flex align-items-center justify-content-center"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("bi bi-geo-alt mr-2"), };
}
{
({} as JSX.IntrinsicElements).span;
({} as JSX.IntrinsicElements).span;
(__VLS_x as JSX.IntrinsicElements)['span'] = { class: ("d-none d-md-inline"), };
}
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("form-control w-50 ml-2"), id: ("champ8"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("text-center"), };
{
({} as JSX.IntrinsicElements).button;
({} as JSX.IntrinsicElements).button;
(__VLS_x as JSX.IntrinsicElements)['button'] = { type: ("submit"), class: ("btn btn-primary"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-4"), };
{
({} as JSX.IntrinsicElements).form;
({} as JSX.IntrinsicElements).form;
(__VLS_x as JSX.IntrinsicElements)['form'] = { class: ("shadow p-4 rounded "), style: ({}), };
{
({} as JSX.IntrinsicElements).h2;
({} as JSX.IntrinsicElements).h2;
(__VLS_x as JSX.IntrinsicElements)['h2'] = { class: ("mb-4 text-center"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row mb-3"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("champ7"), class: ("col-4 col-md-3 col-lg-2 border rounded-pill px-3 py-2 d-flex align-items-center"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("bi bi-person-check"), };
}
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("form-control w-50 ml-2"), id: ("champ7"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row mb-3"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("champ7"), class: ("col-4 col-md-3 col-lg-2 border rounded-pill px-3 py-2 d-flex align-items-center"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("bi bi-person-check"), };
}
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("form-control w-50 ml-2"), id: ("champ7"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row mb-3"), };
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("champ7"), class: ("col-4 col-md-3 col-lg-2 border rounded-pill px-3 py-2 d-flex align-items-center"), };
{
({} as JSX.IntrinsicElements).i;
({} as JSX.IntrinsicElements).i;
(__VLS_x as JSX.IntrinsicElements)['i'] = { class: ("bi bi-person-check"), };
}
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("text"), class: ("form-control w-50 ml-2"), id: ("champ7"), };
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("text-center"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("text-center"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("form-check"), };
{
({} as JSX.IntrinsicElements).input;
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { class: ("form-check-input"), type: ("checkbox"), value: (""), id: ("flexCheckDefault"), };
}
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { class: ("form-check-label"), for: ("flexCheckDefault"), style: ({}), };
}
}
}
}
}
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-md-2"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("card"), style: ({}), };
{
({} as JSX.IntrinsicElements).img;
({} as JSX.IntrinsicElements).img;
(__VLS_x as JSX.IntrinsicElements)['img'] = { src: ("#"), class: ("card-img-top"), alt: (""), id: ("imagePreview"), };
}
}
{
({} as JSX.IntrinsicElements).label;
({} as JSX.IntrinsicElements).label;
(__VLS_x as JSX.IntrinsicElements)['label'] = { for: ("fileInput"), class: ("btn btn-primary"), style: ({}), };
}
{
({} as JSX.IntrinsicElements).input;
(__VLS_x as JSX.IntrinsicElements)['input'] = { type: ("file"), id: ("fileInput"), style: ({}), accept: ("image/*"), onchange: ("previewImage(event)"), };
}
}
}
}
{
({} as JSX.IntrinsicElements).h5;
({} as JSX.IntrinsicElements).h5;
(__VLS_x as JSX.IntrinsicElements)['h5'] = { class: ("text-primary py-4 ml-4"), };
}
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("container mt-4"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("row"), };
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("col-12"), };
{
({} as JSX.IntrinsicElements).table;
({} as JSX.IntrinsicElements).table;
(__VLS_x as JSX.IntrinsicElements)['table'] = { class: ("table table-striped table-bordered"), };
{
({} as JSX.IntrinsicElements).thead;
({} as JSX.IntrinsicElements).thead;
(__VLS_x as JSX.IntrinsicElements)['thead'] = { class: ("thead-dark"), };
{
({} as JSX.IntrinsicElements).tr;
({} as JSX.IntrinsicElements).tr;
(__VLS_x as JSX.IntrinsicElements)['tr'] = {};
{
({} as JSX.IntrinsicElements).th;
({} as JSX.IntrinsicElements).th;
(__VLS_x as JSX.IntrinsicElements)['th'] = { scope: ("col"), style: ({}), };
}
{
({} as JSX.IntrinsicElements).th;
({} as JSX.IntrinsicElements).th;
(__VLS_x as JSX.IntrinsicElements)['th'] = { scope: ("col"), style: ({}), };
}
{
({} as JSX.IntrinsicElements).th;
({} as JSX.IntrinsicElements).th;
(__VLS_x as JSX.IntrinsicElements)['th'] = { scope: ("col"), style: ({}), };
}
{
({} as JSX.IntrinsicElements).th;
({} as JSX.IntrinsicElements).th;
(__VLS_x as JSX.IntrinsicElements)['th'] = { scope: ("col"), style: ({}), };
}
{
({} as JSX.IntrinsicElements).th;
({} as JSX.IntrinsicElements).th;
(__VLS_x as JSX.IntrinsicElements)['th'] = { scope: ("col"), style: ({}), };
}
{
({} as JSX.IntrinsicElements).th;
({} as JSX.IntrinsicElements).th;
(__VLS_x as JSX.IntrinsicElements)['th'] = { scope: ("col"), style: ({}), };
}
{
({} as JSX.IntrinsicElements).th;
({} as JSX.IntrinsicElements).th;
(__VLS_x as JSX.IntrinsicElements)['th'] = { scope: ("col"), style: ({}), };
}
}
}
{
({} as JSX.IntrinsicElements).tbody;
({} as JSX.IntrinsicElements).tbody;
(__VLS_x as JSX.IntrinsicElements)['tbody'] = {};
{
({} as JSX.IntrinsicElements).tr;
({} as JSX.IntrinsicElements).tr;
(__VLS_x as JSX.IntrinsicElements)['tr'] = {};
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
}
{
({} as JSX.IntrinsicElements).tr;
({} as JSX.IntrinsicElements).tr;
(__VLS_x as JSX.IntrinsicElements)['tr'] = {};
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
}
{
({} as JSX.IntrinsicElements).tr;
({} as JSX.IntrinsicElements).tr;
(__VLS_x as JSX.IntrinsicElements)['tr'] = {};
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
{
({} as JSX.IntrinsicElements).td;
({} as JSX.IntrinsicElements).td;
(__VLS_x as JSX.IntrinsicElements)['td'] = {};
}
}
}
}
}
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);

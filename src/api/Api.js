const API_BASE_URL = "https://tokenmaker-apis.block-brew.com/"

const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

const BANNER_DETAILS = getApiUrl("cms/bannerdetails");
// const FEATURE_DETAILS = getApiUrl("cms/featuredetails");
const CUSTOM_DETAILS = getApiUrl("cms/customdetails");
const START_SECTION_DETAILS = getApiUrl("cms/startsectiondetails");
const FAQS = getApiUrl('cms/faqs');
const FEATURES = getApiUrl('cms/features');
const STEPS = getApiUrl('cms/steps');
const FOOTER = getApiUrl('cms/footerdetails')
const HEADER = getApiUrl('cms/headerdetails')
export {FOOTER,BANNER_DETAILS, CUSTOM_DETAILS, START_SECTION_DETAILS,FAQS,FEATURES,STEPS,HEADER}
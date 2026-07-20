const SCHOOL_CHARTER_BANNER_ENABLED = true;
const SCHOOL_CHARTER_FORM_URL = "https://forms.gle/xYBFUvaex5veaQ2FA";

const rawFormUrl =
  import.meta.env.NEXT_PUBLIC_SCHOOL_CHARTER_FORM_URL?.trim() ?? "";

// 2026-27 uses an external Google Form; this can later point to a native charter system.
export const schoolCharterConfig = {
  enabled: SCHOOL_CHARTER_BANNER_ENABLED,
  academicYear: "2026–27",
  formName: "School Census & Charter",
  formUrl: rawFormUrl || SCHOOL_CHARTER_FORM_URL || undefined,
};

export const schoolNetworkConfig = {
  verifiedActiveSchoolCount: undefined as number | undefined,
  fallbackStat: {
    value: "Statewide",
    label: "School Network",
  },
  connectedSchoolsCopy:
    "IEN has connected schools and scholastic esports programs across Indiana.",
};

export function getSchoolNetworkStat() {
  if (typeof schoolNetworkConfig.verifiedActiveSchoolCount === "number") {
    return {
      value: `${schoolNetworkConfig.verifiedActiveSchoolCount}+`,
      label: "Verified Active Schools",
    };
  }

  return schoolNetworkConfig.fallbackStat;
}

if (
  import.meta.env.DEV &&
  schoolCharterConfig.enabled &&
  !schoolCharterConfig.formUrl
) {
  console.warn(
    "NEXT_PUBLIC_SCHOOL_CHARTER_FORM_URL is not set. School charter buttons are disabled until a Google Form URL is configured.",
  );
}

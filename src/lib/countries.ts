export const COUNTRIES = [
  { name: "Argentina", code: "ar", prefix: "+54" },
  { name: "Bolivia", code: "bo", prefix: "+591" },
  { name: "Chile", code: "cl", prefix: "+56" },
  { name: "Colombia", code: "co", prefix: "+57" },
  { name: "Costa Rica", code: "cr", prefix: "+506" },
  { name: "Cuba", code: "cu", prefix: "+53" },
  { name: "República Dominicana", code: "do", prefix: "+1809" },
  { name: "Ecuador", code: "ec", prefix: "+593" },
  { name: "El Salvador", code: "sv", prefix: "+503" },
  { name: "España", code: "es", prefix: "+34" },
  { name: "Estados Unidos", code: "us", prefix: "+1" },
  { name: "Guatemala", code: "gt", prefix: "+502" },
  { name: "Honduras", code: "hn", prefix: "+504" },
  { name: "México", code: "mx", prefix: "+52" },
  { name: "Nicaragua", code: "ni", prefix: "+505" },
  { name: "Panamá", code: "pa", prefix: "+507" },
  { name: "Paraguay", code: "py", prefix: "+595" },
  { name: "Perú", code: "pe", prefix: "+51" },
  { name: "Puerto Rico", code: "pr", prefix: "+1787" },
  { name: "Uruguay", code: "uy", prefix: "+598" },
  { name: "Venezuela", code: "ve", prefix: "+58" }
].sort((a, b) => a.name.localeCompare(b.name));

export const COUNTRY_PREFIXES: Record<string, string> = {};
COUNTRIES.forEach(c => {
  COUNTRY_PREFIXES[c.code] = c.prefix;
});

import PropTypes from "prop-types";
import { Select, MenuItem, FormControl, InputAdornment } from "@mui/material";
import { useTranslation } from "react-i18next";
import TranslateIcon from "@mui/icons-material/Translate";
import { useEffect } from "react";

function LanguageSelector() {
  const { t, ready, i18n } = useTranslation();

  if (!ready) return <div>{t("shared.loading")}</div>;

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
  ];

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const isValidLanguage = languages.some((lng) => lng.code === i18n.language);

    if (!isValidLanguage) {
      handleLanguageChange("en");
    }
  }, [i18n.language]);

  return (
    <FormControl variant="standard" mr={2}>
      <Select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        labelId="select-with-icon-label"
        startAdornment={
          <InputAdornment position="start">
            <TranslateIcon style={{ color: "white" }} />
          </InputAdornment>
        }
        label=""
        sx={{
          color: "white",
          "& .MuiSvgIcon-root": { color: "white" },
          "&:before": { borderBottom: "1px solid white" },
          "&:after": { borderBottom: "2px solid white" },
          "&:hover": { borderBottom: "2px solid white" },
        }}
        MenuProps={{
          PaperProps: {
            style: {
              backgroundColor: "#fff",
              color: "primary",
            },
          },
        }}
      >
        {languages.map((language) => (
          <MenuItem key={language.code} value={language.code}>
            {t(`languages.${language.code}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default LanguageSelector;

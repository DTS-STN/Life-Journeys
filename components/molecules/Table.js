import { useContext } from "react";
import { LanguageContext } from "../../context/languageProvider";
import en from "../../locales/en";
import fr from "../../locales/fr";

function Table({ rows, columns }) {
  return (
    <table className="w-full cursor-text text-left">
      <thead className="text-sm font-display">
        <tr>
          <th className="pl-6 pb-2">{columns[0].heading}</th>
          <th className="text-center pb-2">{columns[1].heading}</th>
        </tr>
      </thead>
      <tbody className="divide-y-2 divide-gray-light-100 border-2 border-gray-light-100">
        {rows.map(({ text, subtext, link, href }) => (
          <tr>
            <td className="pl-6 py-4 border-r-2 border-dk-blue">
              <div className="text-h6 font-display">{text}</div>
              <div className="text-sm font-body">{subtext}</div>
            </td>
            <td className="text-center bg-gray-light-200">
              <a
                href={href}
                className="cursor-pointer hover:text-custom-blue-link hover:underline focus:text-custom-blue-link active:text-blue-500"
              >
                {link}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function TableData() {
  const { items } = useContext(LanguageContext);
  const language = items.language;
  const t = language === "en" ? en : fr;

  const rows = [
    {
      text: t.row1text,
      subtext: t.row1subtext,
      link: t.row1link,
      href: "",
    },
    {
      text: t.row2text,
      subtext: t.row2subtext,
      link: t.row2link,
      href: "",
    },
    {
      text: t.row3text,
      subtext: t.row3subtext,
      link: t.row2link,
      href: "",
    },
  ];

  const columns = [
    {
      heading: t.header1,
    },
    {
      heading: t.header2,
    },
  ];
  return <Table rows={rows} columns={columns} />;
}

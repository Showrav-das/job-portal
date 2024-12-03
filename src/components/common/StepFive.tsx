import { FormEvent, useEffect, useState } from "react";
import Layout from "../layout";
import { CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import ShinyButton from "../ui/shiny-button";
import { FadeText } from "../ui/fade-text";
import { useNavigate } from "react-router-dom";

type Country = {
  name: string;
  flag: string;
  code: string;
  callingCode: string;
};

export default function StepFive() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [phoneCode, setPhoneCode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        const parsedCountries: Country[] = data
          .filter((c: any) => c.idd?.root)
          .map((c: any) => ({
            name: c.name.common,
            flag: c.flags.svg,
            code: c.cca2,
            callingCode: `${c.idd.root}${c.idd.suffixes?.[0] || ""}`,
          }));
        setCountries(parsedCountries);
        setSelectedCountry(parsedCountries[0]);
        setPhoneCode(parsedCountries[0]?.callingCode || "");
      } catch (err) {
        console.error("Error fetching country data:", err);
      }
    };

    fetchCountries();
  }, []);

  // useEffect(() => {
  //   fetch("./data.JSON")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const parsedCountries = data
  //         .filter((c: any) => c.idd?.root) // Ensure countries with valid calling codes are included
  //         .map((c: any) => ({
  //           name: c.name?.common || "Unknown",
  //           flag: c.flags?.svg || "",
  //           code: c.cca2 || "",
  //           callingCode: `${c.idd.root}${c.idd.suffixes?.[0] || ""}`,
  //         }));

  //       setCountries(parsedCountries);
  //       setSelectedCountry(parsedCountries[0] || null);
  //       setPhoneCode(parsedCountries[0]?.callingCode || "");
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching country data:", error);
  //     });
  // }, []);

  const handlePhoneCodeChange = (value: string) => {
    setPhoneCode(value);
    const country = countries.find((c) => c.callingCode === value);
    if (country) setSelectedCountry(country);
  };
  //handle country change
  const handleCountryChange = (code: string) => {
    const country = countries.find((c) => c.code === code);
    if (country) {
      setSelectedCountry(country);
      setPhoneCode(country.callingCode);
    }
  };

  const handleFormSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const phoneNumber = "";
    const phone = `${phoneCode} ${phoneNumber}`;
    console.log("data:", name, email, phone);
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone }),
    });

    if (response.ok) {
      console.log("Email sent successfully!");
      navigate(`/confirmation`);
    } else {
      console.log("Failed to send email.");
    }
  };

  return (
    <Layout>
      <div className="flex justify-center gap-4 max-w-xl mx-auto flex-col items-center">
        <CardTitle className="text-center max-w-2xl mx-auto text-lg text-[#161C2D] sm:text-2xl font-semibold mb-6">
          <FadeText
            className="text-2xl font-bold text-[#347ED7]"
            direction="down"
            framerProps={{
              show: { transition: { delay: 0.5 } },
            }}
            text="Glückwunsch! Du passt super in unser Praxisteam! Nun würden wir Dich gern unverbindlich kennenlernen:"
          />

          <p className="mt-2 text-lg font-normal">
            Wie können wir Dich am besten erreichen?
          </p>
        </CardTitle>
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3">
          <Input
            type="text"
            required
            placeholder="Dein Voller Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            required
            placeholder="Deine E-Mail Adresse *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center gap-2 border rounded w-full">
            {countries.length > 0 ? (
              <>
                {/* Country Dropdown */}

                <select
                  value={selectedCountry?.code || ""}
                  onChange={(e) => handleCountryChange(e.target.value)}
                  className="w-44 rounded p-2"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>

                {/* Flag */}
                {selectedCountry && (
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="w-10 h-6 border"
                  />
                )}

                {/* Phone Input */}
                <Input
                  type="text"
                  required
                  value={phoneCode}
                  onChange={(e) => handlePhoneCodeChange(e.target.value)}
                  className="w-full border-none shadow-none"
                  placeholder="+Code"
                />
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="flex justify-center items-center mt-8">
            <ShinyButton className="bg-primary text-white py-3" type="submit">
              Jetzt unverbindliches Kennenlerngespräch vereinbaren! 📩
            </ShinyButton>
          </div>
        </form>
      </div>
    </Layout>
  );
}

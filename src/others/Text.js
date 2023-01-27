import React from "react";

const Text = () => {
  const sector = [
    { id: "1", name: "Manufacturing ", group: true },
    { id: "91", name: "Machinery equipment/tools", options: true },
    { id: "94", name: "Machinery components", options: true },
    { id: "224", name: "Manufacture of machinery", options: true },

    { id: "43", name: "Beverages", group: true },
    { id: "6", name: "Food and Beverage ", options: true },
    { id: "39", name: "Milk dairy products", options: true },
    { id: "40", name: "Meat meat products", options: true },
    { id: "42", name: "Fish fish products", options: true },
    { id: "342", name: "Bakery confectionery products", options: true },
    { id: "378", name: "Sweets snack food", options: true },

    {
      id: "28",
      name: "Information Technology and Telecommunications",
      group: true,
    },
    { id: "121", name: "Software, Hardware", options: true },
    { id: "122", name: "Telecommunications", options: true },
    { id: "576", name: "Programming, Consultancy", options: true },
    {
      id: "581",
      name: "Data processing, Webportals, E-marketing",
      options: true,
    },

    { id: "2", name: "Service ", group: true },
    { id: "148", name: "Advertising", options: true },
    { id: "18", name: "Electronics and Optics ", options: true },
    { id: "21", name: "Transport and Logistics", options: true },
    { id: "37", name: "Creative industries ", options: true },
    { id: "25", name: "Business services ", options: true },

    { id: "7", name: "Textile and Clothing ", group: true },
    { id: "45", name: "Textile", options: true },
    { id: "44", name: "Clothing", options: true },
    { id: "29", name: "Energy technology ", options: true },
    { id: "35", name: "Engineering ", options: true },

    { id: "8", name: "Wood ", group: true },
    { id: "57", name: "Moulding", options: true },
    { id: "47", name: "Wooden houses", options: true },
    { id: "55", name: "Blowing", options: true },
    { id: "337", name: "Other (Wood)", options: true },

    // ffff
    { id: "51", name: "Wooden building materials", group: true },
    { id: "75", name: "CNC-machining", options: true },
    { id: "62", name: "Forgings,Fasteners", options: true },
    { id: "69", name: "Gas,Plasma, Laser cutting", options: true },
    { id: "66", name: "MIG,TIG, Aluminum welding", options: true },

    { id: "13", name: "Furniture ", group: true },
    { id: "99", name: "Project furniture", options: true },
    { id: "98", name: "Kitchen", options: true },
    { id: "101", name: "Living room", options: true },
    { id: "389", name: "Bathroom/sauna", options: true },
    { id: "385", name: "Bedroom", options: true },
    { id: "390", name: "Children’s room", options: true },
    { id: "394", name: "Other (Furniture)", options: true },

    { id: "33", name: "Environment ", group: true },
    { id: "97", name: "Maritime", options: true },
    { id: "111", name: "Air", options: true },
    { id: "114", name: "Rail", options: true },
    { id: "112", name: "Road", options: true },
    { id: "113", name: "Water", options: true },

    { id: "145", name: "Labelling and packaging printing", group: true },
    { id: "5", name: "Printing  ", options: true },
    { id: "54", name: "Packaging", options: true },
    { id: "150", name: "Book/Periodicals printing", options: true },

    // ffff
    { id: "19", name: "Construction materials ", group: true },
    { id: "141", name: "Translation services ", options: true },
    { id: "227", name: "Repair and maintenance service", options: true },
    { id: "67", name: "Construction of metalstructures" },
    { id: "263", name: "Houses and buildings", options: true },
    { id: "269", name: "Boat/Yacht building", options: true },
    { id: "230", name: "Shiprepair and conversion", options: true },
    { id: "271", name: "Aluminiumand steel workboats", options: true },
    { id: "508", name: "Other", options: true },

    { id: "12", name: "Machinery ", group: true },
    { id: "267", name: "Metal products", options: true },
    { id: "542", name: "Metal works", options: true },
    { id: "11", name: "Metalworking ", options: true },
    { id: "93", name: "Metal structures", options: true },

    { id: "9", name: "Plastic and Rubber ", group: true },
    { id: "559", name: "Plastic processing technology", options: true },
    { id: "556", name: "Plastic goods", options: true },
    { id: "560", name: "Plastic profiles", options: true },
    { id: "53", name: "Plastics welding and processing", options: true },
    { id: "437", name: "Other", options: true },

    { id: "22", name: "Tourism ", group: true },
    { id: "392", name: "Office", options: true },
    { id: "341", name: "Outdoor", options: true },
    { id: "3", name: "Other ", options: true },
  ];
  console.log(JSON.stringify(sector));
  return (
    <>
      {" "}
      <select multiple="" size="5">
        <option value="1">Manufacturing</option>
        <option value="18">
          &nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics
        </option>
        <option value="19">
          &nbsp;&nbsp;&nbsp;&nbsp;Construction materials
        </option>
        <option value="6">&nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage</option>
        <option value="342">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp;
          confectionery products
        </option>
        <option value="43">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages
        </option>
        <option value="42">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish
          products
        </option>
        <option value="40">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat
          products
        </option>
        <option value="39">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy
          products
        </option>
        <option value="437">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
        </option>
        <option value="378">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack
          food
        </option>
        <option value="13">&nbsp;&nbsp;&nbsp;&nbsp;Furniture</option>
        <option value="389">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna
        </option>
        <option value="385">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bedroom
        </option>
        <option value="390">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Children’s room
        </option>
        <option value="98">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Kitchen
        </option>
        <option value="101">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Living room
        </option>
        <option value="392">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Office
        </option>
        <option value="394">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)
        </option>
        <option value="341">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outdoor
        </option>
        <option value="99">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Project furniture
        </option>
        <option value="12">&nbsp;&nbsp;&nbsp;&nbsp;Machinery</option>
        <option value="94">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery components
        </option>
        <option value="91">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machinery
          equipment/tools
        </option>
        <option value="224">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Manufacture of
          machinery
        </option>
        <option value="97">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maritime
        </option>
        <option value="271">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aluminium
          and steel workboats
        </option>
        <option value="269">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht
          building
        </option>
        <option value="230">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ship
          repair and conversion
        </option>
        <option value="93">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal structures
        </option>
        <option value="508">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other
        </option>
        <option value="227">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance
          service
        </option>
        <option value="11">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
        <option value="67">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construction of metal
          structures
        </option>
        <option value="263">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings
        </option>
        <option value="267">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal products
        </option>
        <option value="542">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Metal works
        </option>
        <option value="75">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining
        </option>
        <option value="62">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgings,
          Fasteners
        </option>
        <option value="69">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Gas,
          Plasma, Laser cutting
        </option>
        <option value="66">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MIG,
          TIG, Aluminum welding
        </option>
        <option value="9">&nbsp;&nbsp;&nbsp;&nbsp;Plastic and Rubber</option>
        <option value="54">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Packaging
        </option>
        <option value="556">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods
        </option>
        <option value="559">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic processing
          technology
        </option>
        <option value="55">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blowing
        </option>
        <option value="57">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moulding
        </option>
        <option value="53">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastics
          welding and processing
        </option>
        <option value="560">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles
        </option>
        <option value="5">&nbsp;&nbsp;&nbsp;&nbsp;Printing</option>
        <option value="148">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Advertising
        </option>
        <option value="150">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals
          printing
        </option>
        <option value="145">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Labelling and
          packaging printing
        </option>
        <option value="7">&nbsp;&nbsp;&nbsp;&nbsp;Textile and Clothing</option>
        <option value="44">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Clothing
        </option>
        <option value="45">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Textile
        </option>
        <option value="8">&nbsp;&nbsp;&nbsp;&nbsp;Wood</option>
        <option value="337">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)
        </option>
        <option value="51">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden building
          materials
        </option>
        <option value="47">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses
        </option>
        <option value="3">Other</option>
        <option value="37">&nbsp;&nbsp;&nbsp;&nbsp;Creative industries</option>
        <option value="29">&nbsp;&nbsp;&nbsp;&nbsp;Energy technology</option>
        <option value="33">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
        <option value="2">Service</option>
        <option value="25">&nbsp;&nbsp;&nbsp;&nbsp;Business services</option>
        <option value="35">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
        <option value="28">
          &nbsp;&nbsp;&nbsp;&nbsp;Information Technology and Telecommunications
        </option>
        <option value="581">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web
          portals, E-marketing
        </option>
        <option value="576">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programming,
          Consultancy
        </option>
        <option value="121">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware
        </option>
        <option value="122">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Telecommunications
        </option>
        <option value="22">&nbsp;&nbsp;&nbsp;&nbsp;Tourism</option>
        <option value="141">
          &nbsp;&nbsp;&nbsp;&nbsp;Translation services
        </option>
        <option value="21">
          &nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics
        </option>
        <option value="111">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Air
        </option>
        <option value="114">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rail
        </option>
        <option value="112">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Road
        </option>
        <option value="113">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Water
        </option>
      </select>
    </>
  );
};
export default Text;

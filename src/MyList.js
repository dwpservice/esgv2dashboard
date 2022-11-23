import React from 'react'
import {DataContext} from './DataService'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Popover from '@material-ui/core/Popover'

import MyCheckboxA from './MyCheckboxA'
import MyCheckboxB from './MyCheckboxB'
import MyCheckboxC from './MyCheckboxC'


import Badge from '@material-ui/core/Badge';

import CommentIcon from '@material-ui/icons/Comment';
import MyDialog from './MyDialog'
//---------------------------------------------------

import MySelectRegional from './MySelectRegional'



const useStyles = makeStyles((theme) => ({
    TypographyStyle:{
        color: "blue",
        fontSize: "14px"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 100,
      },  
}))

export default function MyList(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [openselect, setOpenSelect] = React.useState(false);
    
    const {items,setItems,mybearer,myreceiveemail,checkleed,setCheckLeed,myflag,setMyFlag} = React.useContext(DataContext) 
    const [customMessage, setCustomMessage] = React.useState("")
    const [value, setValue] = React.useState('Controlled'); //สำหรับ TextField - reasoncomment
   
    
 /*--------------------------------------------------------------*/   

/*--------------------------------------*/
    const [anchorEl, setAnchorEl] = React.useState(null);
    const msgTextPop = [
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>- Locate in a neighborhood certified under LEED-ND. </Typography></li>
                <li><Typography variant='body1'>- Certified Plan or Certified Project under LEED-ND v4, Stage 2 or Stage 3 under LEED-ND Pilot or LEED-ND v2009. </Typography></li>
                <li><Typography variant='body1'>- Credit is mutually exclusive with other credits in the Location and Transportation category. </Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
            <li><Typography>- Option 1: Locate the project on previously developed land</Typography></li>
            <li><Typography>- Option 2: Site that doesnt meet any of the sensitive land criteria</Typography> </li>
            <ul className='Mylist'>
                <li><Typography>- Prime Farmland</Typography></li>
                <li><Typography>- Floodplans</Typography></li>
                <li><Typography>- Habitat for threated or endangered species</Typography></li>
                <li><Typography>- Within 100 feet of water bodies, except for minor improvements</Typography></li>
                <li><Typography>- Within 50 feet of wetlands, except for minor improvements</Typography></li>
                
            </ul>
            </ul>
        </div>,   
        <div className='MyMsgFrame'>     
            <ul className='Mylist'>
                <li><Typography variant='body1'>- Option 1 (1 Point): - Locate the project on an infill location in a historic district.</Typography></li>
                <li><Typography variant='body1'>- Option 2 (1 point): - Locate the project site in one of the following:</Typography></li>
            </ul>
            <Typography variant='body1'>A EPA National Priorities Listed Site, Federal Empowerment Zone, Federal Enterprise Community, Federal Renewal Community, Federal Low-Income Community, or Federal Qualified Census Tract (QCT) or Difficult Development Area (DDA)</Typography> 
            <ul className='Mylist'>
                <li><Typography variant='body1'>- Option 3 (2 points): - Locate the project on a brownfield site with soil or groundwater contamination where jurisdiction requires remediation and perform remediation as required.</Typography></li> 
            </ul>
        </div>,
        <div className='MyMsgFrame'>     
            <ul className='Mylist'>
                <li><Typography variant='body1'>- Option 1 (2-3 points): Locate on a site where the surrounding density within a ¼ mile radius meets “separate residential and nonresidential densities” or the “combined density” value.</Typography></li>
                <li><Typography variant='body1'>- Option 2 (1-2 points): Locate the building within ½ mile walking distance to 4-7 (1 point) or 8+ (2 points) existing and publically available diverse uses.</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>    
            <Typography variant='body1'>Locate the project within ¼ mile walking distance of bus, streetcar, or rideshare stops, OR within ½ mile walking distance of bus rapid transit stops, light or heavy rail stations, commuter rail stations or ferry terminals. Stations may be existing, or planned if they are sited, funded, and under construction by the date of the certificate of occupancy and are complete within 24 months of that date.</Typography>
        </div>,
        <div className='MyMsgFrame'>        
         <div><Typography variant='body1'>Within 200 yards of a bicycle network that connects to one within 3-miles by bike:</Typography></div>
            <ul className='Mylist'>
                <li><Typography variant='body1'>- 10 diverse uses</Typography></li>
                <li><Typography variant='body1'>- School/Employment center (if project is 50% or more residential)</Typography></li>
                <li><Typography variant='body1'>- Bus rapid transit, light or heavy rail, commuter rail, or ferry</Typography></li>
            </ul> 
         <div><Typography variant='body1'>"Short Term" bike parking for 2.5% peak visitors (min 4) + "Long Term" bike storage for 5% all commercial occupants (min 4) + Long term bicycle storage for 30% of all residents (min one per residence) </Typography></div> 
         <ul className='Mylist'>
             <li><Typography variant='body1'>- One shower for first 100 occupants, plus an additional shower for every additional 150.</Typography></li>
         </ul> 
        </div>,
        <div className='MyMsgFrame'>
            <Typography variant='body1'>Do not exceed code parking capacity and provide capacity that is below the base ratios recommended by the Parking Consultants Council.<br /> 
        Provide 5% preferred parking for carpools</Typography> 
            <ul className='Mylist'>
                <li><Typography variant='body1'>Case 1. Baseline location (no credit for Surrounding Density and Diverse Uses or Access to Quality Transit) : 20% reduction from the base ratios.</Typography></li>
                <li><Typography variant='body1'>Case 2. Dense and/or transit-served location (earns density and/or transit credit): 40% reduction.</Typography></li>
            </ul> 
        </div>,
        <div className='MyMsgFrame'>        
            <ul className='Mylist'>
                <li><Typography variant='body1'>5% preferred parking for green vehicles, across all parking sections (e.g. short and long term) </Typography></li>
                <li><Typography variant='body1'>-OR-</Typography></li>
                <li><Typography variant='body1'>Provide at least 20% parking discount.</Typography></li>
                <li><Typography variant='body1'>-AND-</Typography></li>
                <li><Typography variant='body1'>Option 1. Install electric vehicle charging stations for at least 2% of all parking spaces</Typography></li>
                <li><Typography variant='body1'>Option 2. Install alternative fueling or battery switching to serve vehicles equal to 2% of parking.</Typography></li>
            </ul> 
        </div>,
        <div className='MyMsgFrame'>        
          <ul className='Mylist'>
            <li><Typography variant='body1'>Create and implement an erosion and sedimentation control plan for all construction activities.Plan must follow 2012 US EPA Construction General Permit or local equivalent, whichever is more stringent.</Typography></li>
           
          </ul> 
        </div>,
        <div className='MyMsgFrame'>
          <ul className='Mylist'>
            <li><Typography variant='body1'>Survey and document: Topography, Hydrology, Climate, Vegetation, Soils, Human use, Human health effects. </Typography></li>
            <li><Typography variant='body1'>Survey should demonstrate the relationship between site features and these topics, and describe how these features influenced the design.</Typography></li>
          </ul> 
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Preserve and protect min 40% of existing greenfields from development and construction activity.</Typography></li>
                <li><Typography variant='body1'>-AND-</Typography></li>
                <li><Typography variant='body1'>Option 1. (2 points) - Restore 30% of total site using native or adapted vegetation and, restore disturbed or compacted soils that will be vegetated.</Typography></li>
                <li><Typography variant='body1'>Option 2. (1 point) - Donate $0.40 per sq.ft. of the total site to a nationally or locally recognized land trust or conservation organization.</Typography></li>
            </ul>        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Open and accessible space at least 30% of the total site (min 25% of this space must be vegetated or have vegetated canopy)</Typography></li>
                <li><Typography variant='body1'>One or more of the following: Pedestrian-oriented paving or turf, Recreation-oriented paving or turf, Garden space w/ diverse year round plantings, Garden space dedicated to food or community gardens, or Habitat that meets criteria of SS Credit Site Development – Protect or Restore Habitat</Typography></li>
            </ul> 
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (2-3 points) - Manage runoff on site for the 95th (2 points) or 98th (3 points) percentile rainfall event using low-impact development and green infrastructure</Typography></li>
                <li><Typography variant='body1'>Projects on zero lot lines with min 1.5 FAR meet 85th (3 points) percentile event.</Typography></li>
                <li><Typography variant='body1'>Option 2. (3 points) - Natural land cover conditions (3 points) - Annual postdevelopment runoff must not exceed predevelopment values.</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (2 points) - Install roof and nonroof measures for 50% of nonroof area and 75% roof area, by weighted average</Typography></li>
                <li><Typography variant='body1'>Option 2. (1 point) - At least 75% of parking spaces under cover. Any roof used must meet one of the following: 3-year aged SRI of at least 32, Vegetated roof, or Be covered by energy generation systems.</Typography></li>
            </ul> 
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Meet both uplight and light trespass requirements using either </Typography></li>
                <li><Typography variant='body1'>Option 1 (BUG method - prescriptive) or </Typography></li>
                <li><Typography variant='body1'>Option 2 (Calculation). Trespass requirements depending on MLO Lighting Zone.</Typography></li>
                <li><Typography variant='body1'>Internally illuminated signage must not exceed 200 cd/m3 (nits) at night and 2000 cd/m during the day.</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. No permanent irrigation required after 2 years.</Typography></li>
                <li><Typography variant='body1'>Option 2. Reduce irrigation water demand by 30% using EPA WaterSense Water Budget Tool.</Typography></li>    
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Reduce water use by 20% from baseline.</Typography></li>
                <li><Typography variant='body1'>All eligible new toilets, urinals, private lavatory faucets, and showerheads must be WaterSense labeled (or local equivalent).</Typography></li>
                <li><Typography variant='body1'>Meet minimum water efficiency for appliances, equipment, and processes.</Typography></li>
            </ul> 
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Track (and share with USGBC) monthly and annual water usage data for 5 years.</Typography></li>
            </ul>
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (2 points) - No permanent irrigation required after 2 years.</Typography></li>
                <li><Typography variant='body1'>Option 2. Reduce irrigation water demand by 50% (1 point) or 100% (2 points), can count nonpotable sources.</Typography></li>            
            </ul> 
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Reduce water use by 25% - 50% from baseline.</Typography></li>
                <li><Typography variant='body1'>Meet additional water efficiency for appliances, equipment, and processes.</Typography></li>           
            </ul> 
            <Typography variant='body1'>Some of these fittings and fixtures may be outside the tenant space (for Commercial Interiors) or project boundary (for New Construction).</Typography> 
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>One-time potable water analysis, measuring at least the five control parameters: (Ca (as in CaCO3) – max 1000 ppm, Total alkalinity – max 1000 ppm, SiO2 – max 100 ppm, Cl- - max 250 ppm, Conductivity – max 2000 μS/cm)</Typography></li>
                <li><Typography variant='body1'>Calculate number of cooling tower cycles, limiting cooling cycles to avoid exceeding maximum concentrations for any parameter.Up to 10 cycles, 1 point10+ cycles, or 20% reclaimed water, 2 points</Typography></li>       
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Install additional metering for two or more: Irrigation, Indoor plumbing, Domestic hot water, Large boilers, Reclaimed water, and/or Other process water</Typography></li>        
            </ul>  
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Develop OPR and BOD and designate CxA by end of DD phase. </Typography></li>
                <li><Typography variant='body1'>Create an Operations and Maintenance Plan</Typography></li>
                <li><Typography variant='body1'>CxA must: Review OPR, BOD and project design, Develop and implement a Cx plan, Cx requirements into the construction documents, Develop construction checklists, Develop a system test procedure, Verify system testing, Maintain an issues/benefits log, Prepare a final Cx process report, Document all findings directly to the owner.</Typography></li>
            </ul>         
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Comply with mandatory and prescriptive provisions of ASHRAE 90.1-2010</Typography></li>
                <li><Typography variant='body1'>-AND-</Typography></li>
                <li><Typography variant='body1'>Option 1. Perform an energy model to show at least 5% energy cost savings.</Typography></li>
                <li><Typography variant='body1'>Option 2. Follow prescriptive requirements of the ASHRAE Advanced Energy Design Guide specific to the project type. Only certain projects are eligible.</Typography></li>
                <li><Typography variant='body1'>Option 3. Follow Design Process Strategies, Core Performance Requirements, and select Enhanced Performance Strategies (Supply Air Temperature Reset (VAV), Premium Economizer Performance, and Variable Speed Control)</Typography></li>
            </ul>
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Provide energy metering devices for all energy inputs, including electricity, natural gas, chilled water, steam, fuel oil, propane, biomass, etc.</Typography></li>
                <li><Typography variant='body1'>Commit to sharing whole building energy usage data with USGBC for 5 years or until a change in ownership or lessee.</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Do not use CFC-based refrigerants in new HVAC&R systems.</Typography></li>
                <li><Typography variant='body1'>If existing systems contain CFC-based refrigerants, complete a CFC phase-out conversion before project completion.</Typography></li>
            </ul>
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. Enhanced Systems Commissioning</Typography></li>
                <li><Typography variant='body1'>Path 1 (3 points) </Typography></li>
                <li><Typography variant='body1'>- Complete Cx process activities for MEP and renewable energy systems according to ASHRAE Guideline 0-2005 and ASHRAE Guideline 1.1-2007.</Typography></li>
                <li><Typography variant='body1'>CxA must: Review contractor submittals, Verify systems manual and training requirements in CD, Verify systems manual updates and delivery, Verify operator training delivery and effectiveness, Verify seasonal testing, Review building operations 10 months after substantial completion, Develop an ongoing Cx Plan</Typography></li>
                <li><Typography variant='body1'>Path 2 (4 points) </Typography></li>
                <li><Typography variant='body1'>- Achieve path 1 and: Monitor points to assess performance of energy and water using systems and include this information in the Cx Plan, and Update systems manual with any changes and provide justification for modifications from original design.</Typography></li>
                <li><Typography variant='body1'>-AND/OR-</Typography></li>
                <li><Typography variant='body1'>Option 2. Envelope Commissioning (2 points)Include the building’s thermal envelope in Cx, and perform enhanced Cx on the envelope</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Comply with mandatory and prescriptive provisions of ASHRAE 90.1-2010</Typography></li>
                <li><Typography variant='body1'>-AND-</Typography></li>
                <li><Typography variant='body1'>Option 1. (1-18 points) - Perform an energy model to show energy cost savings.</Typography></li>
                <li><Typography variant='body1'>Option 2. (1-6 points) - Follow prescriptive requirements of the ASHRAE Advanced Energy Design Guide specific to the project type. </Typography></li>
                <li><Typography variant='body1'>Only certain projects types are eligible.</Typography></li>          
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Install advanced energy metering for all whole-building energy sources and any individual energy end use that is 10% or more of the total annual use.</Typography></li>
            </ul> 
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Energy generation and distribution systems more efficient, increase grid reliability, and reduce greenhouse gas emissions.</Typography></li>
                <li><Typography variant='body1'>Design the building and equipment to allow participation in demand response programs through load shedding or shifting (does not include on-site energy generation).</Typography></li>
                <li><Typography variant='body1'>Participation in programs is required where they are available.</Typography></li>                     
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Use on-site renewable energy to offset a 1% (1 point), 5% (2 points), or 10% (3 points) of the building energy cost, using energy model or CBECS database.</Typography></li>
            </ul>
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
            <li><Typography variant='body1'>Option 1. Use no refrigerants or use only refrigerants that have an ODP of zero and a GWP of less than 50.</Typography></li>
            <li><Typography variant='body1'>Option 2. Select refrigerants to minimize or eliminate the use of compounds that deplete the ozone and/or contribute to climate change, and perform calculation showing that all HVAC&R equipment is within acceptable levels.</Typography></li>          
            </ul>
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Provide dedicated collection and storage area(s) for:Mixed paper, Corrugated cardboard, Glass, Plastics, and Metals</Typography></li>
                <li><Typography variant='body1'>Take measures for safe collection, storage, and disposal for 2:Batteries, Mercury-containing lamps, and/or Electronic waste</Typography></li>                     
            </ul>
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (5 points) - Reuse a registered (or eligible) historic building structure, envelope, and interior nonstructural elements, and follow additional guidelines to maintain historic character.</Typography></li>
                <li><Typography variant='body1'>Option 2. (5 points) - Maintain 50% (surface area) of existing structure, enclosure, and interior nonstructural elements of an abandoned or blighted building</Typography></li>
                <li><Typography variant='body1'>Option 3. (2-4 points) - Reuse or salvage building materials as a percentage of surface area. 25% - 2 points, 50% - 3 points, 75% - 4 points.</Typography></li>
                <li><Typography variant='body1'>Option 4. (3 points) - For partial or entire new construction, conduct LCA of the project structure and enclosure. LCA must:Demonstrate 10% reduction from baseline building in at least 3 areas, including global warming potential.</Typography></li>
            </ul> 
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (1 point) Use 20 products from at least 5 manufacturers as follows:</Typography></li>
                <li><Typography variant='body1'>- Product-specific Type III EPD – full credit per product</Typography></li>
                <li><Typography variant='body1'>- Industry-wide (generic) EPD – ½ credit per product</Typography></li>
                <li><Typography variant='body1'>- Third-party certified (ISO 14044) Life-Cycle Assessment (LCA) – ¼ credit per product</Typography></li>
                <li><Typography variant='body1'>- Other USGBC approved programs</Typography></li>
                <li><Typography variant='body1'>Option 2. (1 point) Use 50% (by cost) materials that show improvements in at least 3 areas, including global warming potential. Products harvested, manufactured and purchased within 100 miles are valued at 200% cost.</Typography></li> 
            </ul> 
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (1 point) Use 20 products from at least 5 manufacturers as follows:</Typography></li>
                <li><Typography variant='body1'>- 3rd party verified Corporate Sustainability Reports (CSR). Full credit per product.</Typography></li>
                <li><Typography variant='body1'>- Self-declared report. ½ credit per product.</Typography></li>
                <li><Typography variant='body1'>- Other USGBC approved programs.</Typography></li>
                <li><Typography variant='body1'>Option 2. (1 point) Use 25% by cost (harvested, manufactured and purchased within 100 miles at 200% cost):</Typography></li>
                <li><Typography variant='body1'>- Extended producer responsibility</Typography></li>
                <li><Typography variant='body1'>- Bio-based material</Typography></li>
                <li><Typography variant='body1'>- Wood products</Typography></li>
                <li><Typography variant='body1'>- Materials reuse</Typography></li>
                <li><Typography variant='body1'>- Recycled content</Typography></li>
                <li><Typography variant='body1'>- Other USGBC approved programs</Typography></li>          
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (1 point) Use 20 products from at least 5 manufacturers that demonstrate chemical inventory of their product to at least 0.1% using:</Typography></li>
                <li><Typography variant='body1'>- Manufacturer Inventory</Typography></li>
                <li><Typography variant='body1'>- Health Product Declaration (HPD)</Typography></li>
                <li><Typography variant='body1'>- Cradle to Cradle (v2 Basic level or v3 Bronze)</Typography></li>
                <li><Typography variant='body1'>- Other USGBC approved program</Typography></li>
                <li><Typography variant='body1'>Option 2. (1 point) Use 25% (by cost), meeting one:</Typography></li>
                <li><Typography variant='body1'>- GreenScreen v1.2 Benchmark with no benchmark hazards down to 100 ppm with any ingredients assessed (100% value), or all ingredients assessed (150% value)</Typography></li>
                <li><Typography variant='body1'>- Cradle to Cradle V3 Silver or V2 Gold (100%), or V3 Gold or V2/V3 Platinum (150%)</Typography></li>
                <li><Typography variant='body1'>- International ACP – REACH Optimization with no substances of very high concern (100%)</Typography></li>
                <li><Typography variant='body1'>- Other USGBC approved program</Typography></li>
                <li><Typography variant='body1'>Option 3. (1 point) Use 25% (by cost), with 3rd party verification showing validated sourcing for at least 99% of a product's ingredients (by weight).</Typography></li>
            </ul>
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. Recycle and/or Salvage nonhazardous construction and demolition materials.</Typography></li>
                <li><Typography variant='body1'>- Min 50%, including at least 3 material streams (1 point)</Typography></li>
                <li><Typography variant='body1'>- Min 75%, including at least 4 material streams (2 points)</Typography></li>
                <li><Typography variant='body1'>Option 2. (2 points) - Do not generate more than 2.5 pounds of waste per square foot (12.2 kg/m2) floor area</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Meet separate ventilation and monitoring requirements for both mechanically and naturally ventilated spaces.</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Outdoors:</Typography></li>
                <li><Typography variant='body1'>Prohibit smoking outside except in designated areas, at least 25 feet from entries, outdoor air intakes, and operable windows, and in all areas used for business purposes (e.g. sidewalk sale).Include no-smoking signage (stating policy) within 10 feet (3 meters) of all building entrances.</Typography></li>
                <li><Typography variant='body1'>Indoors:</Typography></li>
                <li><Typography variant='body1'>Prohibit smoking in all nonresidential areasProhibit smoking in residential areas, or implement significant measures to minimize exposure.</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (1 point) - Comply with all applicable requirements for entryway systems, cross-contamination prevention, filtration, natural ventilation design calculations, and mixed-mode design calculations.</Typography></li>
                <li><Typography variant='body1'>Option 2. (1 point) - Comply with all applicable requirements for exterior contamination prevention, increased ventilation, carbon dioxide monitoring, source control and monitoring, and natural ventilation room by room calculations.</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (1-3 points) Comply with 2 or more of the 5-7 categories.</Typography></li>
                <li><Typography variant='body1'>- Interior paints and coatings</Typography></li>
                <li><Typography variant='body1'>- Interior adhesives and sealants</Typography></li>
                <li><Typography variant='body1'>- Flooring- Composite Wood- Ceilings, walls, thermal, and acoustic insulation</Typography></li>
                <li><Typography variant='body1'>- Furniture (if in scope)</Typography></li>
                <li><Typography variant='body1'>- Exterior applied products (LEED-HC and LEED-S only)</Typography></li>
                <li><Typography variant='body1'>Option 2. (1-3 points) Budget Calculation Method</Typography></li>
                <li><Typography variant='body1'>If some products in a category don’t meet requirements, calculate percentage compliance using a weighted average.</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>- Develop and implement an IAQ plan for construction and preoccupancy phases of the building</Typography></li>
                <li><Typography variant='body1'>- Meet or exceed SMACNA Control Measures and protect absorptive materials from moisture damage</Typography></li>
                <li><Typography variant='body1'>- Install MERV 8 filters in return air grille and return or transfer duct inlet opening for any equipment that will be operated during construction. </Typography></li>
                <li><Typography variant='body1'>- Install final filters immediately prior to occupancy.</Typography></li>
                <li><Typography variant='body1'>- Prohibit use of tobacco inside the building and within 25 feet (7.5 meters) of building entrance during construction.</Typography></li>
            </ul>
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (1 point) </Typography></li>
                <li><Typography variant='body1'>- Flush-out with 14,000 cu.ft. of outdoor air per sq.ft. prior to occupancy</Typography></li>
                <li><Typography variant='body1'>- Maintain temperature between 60 F to 80 F (15 C to 27 C)</Typography></li>
                <li><Typography variant='body1'>- Keep relative humidity no higher than 60%</Typography></li>
                <li><Typography variant='body1'>- Occupancy can begin after 3,500 cu.ft/sq.ft.</Typography></li>
                <li><Typography variant='body1'>Option 2. (2 points) </Typography></li>
                <li><Typography variant='body1'>- Perform air quality testing to show airborne contaminants do not exceed maximum levels of Formaldehyde, Particulates (PM10), Total volatile organic compounds (TVOCs), Target chemicals from CDPH Standard Method v1.1, Carbon monoxide, Ozone (only in EPA nonattainment areas), and Particulates (PM2.5) (only in EPA nonattainment areas)</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Design - Design HVAC and envelope to meet ASHRAE 55-2010 or ISO and CEN Standards</Typography></li>
                <li><Typography variant='body1'>Controls - Provide thermal comfort controls for 50% of individual occupant spaces and all shared multioccupant spaces.</Typography></li>
            </ul> 
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (1 point) - Provide individual multi-scene lighting controls for at least 90% of occupant spaces.Provide multi-scene lighting controls for all multioccupant spaces.</Typography></li>
                <li><Typography variant='body1'>Option 2. (1 point) - Implement at least 4 additional strategies.</Typography></li>
            </ul> 
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Provide glare control for all regularly occupied spaces and meet one option:</Typography></li>
                <li><Typography variant='body1'>Option 1. (2-3 points) - Complete daylight model to show spatial daylight autonomy of at least 55% (2 points) or 75% (3 points) is achieved using regularly occupied floor area.</Typography></li>
                <li><Typography variant='body1'>Option 2. (1-2 points) - Complete daylight model to show between 300 lux and 3,000 lux for 75% (1 point) or 90% (2 points) of regularly occupied floor area.</Typography></li>
                <li><Typography variant='body1'>Option 3. (2-3 points) - Achieve between 300 lux and 3,000 lux for 75% (2 points) or 90% (3 points) of regularly occupied floor area.</Typography></li>
            </ul>
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Achieve at least 2 for 75% of regularly occupied floor area:</Typography></li>
                <li><Typography variant='body1'>- Multiple views at least 90 degrees apart</Typography></li>
                <li><Typography variant='body1'>- Views of at least 2: flora, fauna, sky, movement, and/or distant objects</Typography></li>
                <li><Typography variant='body1'>- Views through nearby vision glazing</Typography></li>
                <li><Typography variant='body1'>- Quality views (rated at least 3 in referenced standard)</Typography></li>
            </ul> 
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Implement measures to address:</Typography></li>
                <li><Typography variant='body1'>- HVAC Background Noise</Typography></li>
                <li><Typography variant='body1'>- Sound Transmission</Typography></li>
                <li><Typography variant='body1'>- Reverberation Time</Typography></li>
                <li><Typography variant='body1'>- Sound Reinforcement and Masking Systems.</Typography></li>          
            </ul>   
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>Option 1. (1-3 points)</Typography></li>
                <li><Typography variant='body1'>Identify following in writing:</Typography></li>
                <li><Typography variant='body1'>- Intent of innovation credit</Typography></li>
                <li><Typography variant='body1'>- Proposed requirement for compliance</Typography></li>
                <li><Typography variant='body1'>- Proposed submittals to demonstrate compliance</Typography></li>
                <li><Typography variant='body1'>- Design approach (strategies) used to meet requirements</Typography></li>
                <li><Typography variant='body1'>Option 2. (1-3 points)</Typography></li>
                <li><Typography variant='body1'>- Achieve one pilot credit from USGBC’s LEED Pilot Credit Library</Typography></li>
                <li><Typography variant='body1'>Option 3. (1-2 points)</Typography></li>
                <li><Typography variant='body1'>- Meet exemplary performance requirement of eligible credit.</Typography></li>
            </ul>
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>At least one principal participant of the project team must be a LEED Accredited Professional (AP) with a specialty appropriate for the project.</Typography></li>
                <li><Typography variant='body1'>- LEED AP BD+C</Typography></li>
                <li><Typography variant='body1'>- LEED AP ID+C</Typography></li>
                <li><Typography variant='body1'>- LEED AP O+M</Typography></li>
                <li><Typography variant='body1'>- LEED AP Homes</Typography></li>
                <li><Typography variant='body1'>- LEED AP ND</Typography></li>
            </ul>
        
        </div>,
        <div className='MyMsgFrame'>
        
        </div>,
        <div className='MyMsgFrame'>
        
        </div>,
        <div className='MyMsgFrame'>
        
        </div>,
        <div className='MyMsgFrame'>
        
        </div>,
        <div className='MyMsgFrame'>
            <ul className='Mylist'>
                <li><Typography variant='body1'>- Identify and use opportunities to achieve synergies across disciplines and building systems.</Typography></li>
                <li><Typography variant='body1'>- “Simple box” energy modeling during SD phase</Typography></li>
                <li><Typography variant='body1'>- Water budget analysis during SD phase</Typography></li>
                <li><Typography variant='body1'>- Use early energy modeling and water budget to inform OPR, BOD, and project design</Typography></li>
                
            </ul>
        
        </div>,



 
     ]

    const handleClick = (event,index) => {       
            
             setAnchorEl(event.currentTarget)
    //         console.log("index in handleClick=> ",index)
    //         console.log("event.currentTarget => ",event.currentTarget)
    //         console.log('props in handleClick => ',props)
    //         console.log('props.details[index].info ==> ' , props.details[index].info)

    //         console.log('Popo index ', props.details[index].popo)
             const msgIndex = props.details[index].popo
             return (
             //    setCustomMessage(props.details[index].popo)
                   setCustomMessage(msgTextPop[msgIndex])
             )
   
             
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  //  console.log('id is', id)
/*--------------------------------------*/
    const handleChangeComment = (event) => {
         setValue(event.target.value);
    }; 
//***********************************************************************/
    const [dialogopen, setDialogOpen] = React.useState(false);
    const [activeinfo, setActiveInfo] = React.useState("")

    const handleClickOpenDialog = (e,info) => {
        e.currentTarget.getAttribute("id")
//      console.log('กำลังคลิกที่ไอคอน comment id ...',e.currentTarget.getAttribute("id"))  // ex comicon-LEED for Neighborhood Development Location
//      console.log('info...',info)
      setActiveInfo(info)
      setDialogOpen(true); /* แสดง dialog ใส่ reason comment  */
    //  let xx = 'frame-' + info
    //  console.log('xx ......',xx)
    //  document.getElementById(xx).style.removeProperty('borderColor') 
    //  document.getElementById(xx).style.removeProperty('borderWidth')
    //  document.getElementById(xx).style.removeProperty('borderStyle')
    };
  
    const handleCancelCloseDialog = () => {
      
        setDialogOpen(false); /* ปิด dialog เมื่อกดปุ่ม cancel  */
      };
    const handleCloseDialog = () => {

      setDialogOpen(false); /* ปิด dialog ใส่ reason comment  */
    };

    function testme(e){
  //      console.log(e.target.id)
    }
    const [comvalue, setComValue] = React.useState("")
    function mychangecom(e){
   //    console.log('show is ',e.target.id) 
       setComValue(e.target.value)
    }
    //------------------------------------------------------
      const handleChangeSelect = (event) => {
        setAge(event.target.value);
      };
      const handleCloseSelect = () => {
        setOpenSelect(false);
      };
    
      const handleOpenSelect = () => {
        setOpenSelect(true);
      };

/* 
    function handleClickPass(e){
          console.log(e.target.checked)   
          console.log(e.target.id)
          console.log()  //สามารถเข้าถึง attribute เช่น itemlist, myindex, title ได้ ต.ย. e.currentTarget.getAttribute("itemlist")
          console.log(props.details)
          const outputselect = props.details.map(itemInEachGroup => {
             
            console.log('itemInEachGroup ...',itemInEachGroup.info)
            if (itemInEachGroup.info === e.currentTarget.getAttribute("itemlist")) {
                console.log("YOU ARE CLICKING AT ",e.currentTarget.getAttribute("itemlist"))
                let [check1,check2,check3,check4,check5,check6] = itemInEachGroup.listcheckbox 
                
                itemInEachGroup.listcheckbox.map(eachCheckBox =>{
                    return  eachCheckBox[3] === e.target.checked ? [...eachCheckBox, e.target.value = "t"] : [...eachCheckBox]
                    
                })
            } 
             
          })
          const x1 = () => setItems(outputselect)
    }
  */
    
//    console.log("MyList Coponent is rendered....")  

return  (
            <div>
                
             
                {props.id !== "0"?
                  
                    
                    <div style={{backgroundColor: "#c0c0c0",height:"30px",borderStyle:"none",borderRadius: "15px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                       <Typography variant="subtitle2"  style={{width:"50%"}}>{props.id} - {props.item}</Typography>
                       <span style={{width:"30%"}}></span>
                       <Typography variant="subtitle2"  style={{width:"3%"}}>{props.headscore}</Typography>
                    </div>
                      
                : <div style={{display:"flex",alignItems:"center"}}>
                    <img src="leedlogo.png" width="auto" height="60" />
                    <Typography variant='body1' style={{fontWeight: "bold",marginLeft: "10px"}}>LEED v4.1 BD+C</Typography>  
                         
                 </div>
                }
                
                {props.id === "8" ? 
                    (<div>
                        <ul className='Mylist'>
                            <li>
                                <Typography variant='caption'>Earn up to 4 of the 6 regional priority credits. Credits are determined by USGBC regional chapters.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant='caption'>Priority credits & their geographic applicability on USGBC website: <a href="https://www.usgbc.org/regional-priority-credits" target="_blank">https://www.usgbc.org/regional-priority-credits</a>
                                </Typography>
                            </li>
                        </ul>
                    </div>)
                : null
                } 

                {props.details.map((sub,index) =>  (       
                     
                 props.id === "2" || 
                 props.id === "3" ||
                 props.id === "4" ||
                 props.id === "5" ||
                 props.id === "6" ||
                 props.id === "7" ||
                 props.id === "8"  ?  
                               
                        <div    key={sub.info} id={'frame-'+sub.info}
                                    style={{margin: "8px",
                                            display:"flex",
                                            justifyContent:"left",
                                            flexDirection: "row",
                                            flexWrap:"wrap",
                                            alignItems:"center",
                                            border: sub.option == 'r' && sub.listcheckbox[0] == 'f' && sub.reasoncomment == ''   
                                                ? myflag !== true 
                                                    ? "1px solid red" 
                                                    : "1px solid white"                                                
                                                : "1px solid white",
                                           
                                        
                                        }}>   
                                            <CommentIcon
                                                id={'comicon-'+sub.info}
                                                onClick={(e,info)=>handleClickOpenDialog(e,sub.info)} 
                                                style={{color: sub.reasoncomment ? "blue" :"gray",
                                                        marginRight:"3px",
                                                        cursor: "pointer"}} />
                                            {/* ปกติแล้ว Dialog จะไม่แสดง */}  
                                                    
                                            <MyDialog
                                                    info={sub.info}
                                                    parentid={activeinfo}  
                                                    holdparentid ={props.id} 
                                                    open={dialogopen}
                                                    value={sub.reasoncomment}
                                                    close={handleCloseDialog}
                                                    
                                                                                            
                                            />
                                            {/* ปกติแล้ว Dialog จะไม่แสดง */} 

                                        <MyCheckboxA id={index+sub.info+"A"} 
                                            name={sub.info+"A"} 
                                            value={sub.listcheckbox[0]} 
                                            parentid={sub.info} 
                                            holdparentid ={props.id}                            
                                            myindex={index}                             
                                            style={{backgroundColor:"#32d95e"}} />

                                        <span style={sub.option !== "o" ? {visibility:"hidden"}:{visibility:"visible"}}>  
                                            <MyCheckboxB id={index+sub.info+"B"} 
                                                name={sub.info+"B"} 
                                                value={sub.listcheckbox[1]} 
                                                parentid={sub.info} 
                                                holdparentid ={props.id}                            
                                                myindex={index}                            
                                                style={{backgroundColor:"#eef51d"}} />
                                            <MyCheckboxC id={index+sub.info+"C"} 
                                                name={sub.info+"C"} 
                                                value={sub.listcheckbox[2]} 
                                                parentid={sub.info} 
                                                holdparentid ={props.id} 
                                                myindex={index} 
                                                style={{backgroundColor:"#f5851d"}} />    
                                        </span>      
                                        
                                        <label onClick= {((sub.info === 'Regional Priority: Specific -1') || 
                                                          (sub.info === 'Regional Priority: Specific -2') || 
                                                          (sub.info === 'Regional Priority: Specific -3') || 
                                                          (sub.info === 'Regional Priority: Specific -4')) ? null : (event)=>{handleClick(event,index)}}   
                                                style={sub.option === "o" ? {width: "500px",marginLeft: "10px",cursor:"pointer"}:{color: "red",width: "500px",marginLeft: "10px",cursor:"pointer"}}  >
                                            
                                            { ((sub.info === 'Regional Priority: Specific -1') || 
                                               (sub.info === 'Regional Priority: Specific -2') || 
                                               (sub.info === 'Regional Priority: Specific -3') || 
                                               (sub.info === 'Regional Priority: Specific -4')) 
                                            ? <div>
                                                <MySelectRegional
                                                   labelid={sub.info}
                                                   selectid={sub.infoscreen}
                                                   
                                                   parentid={sub.info}    /* need for update */ 
                                                   holdparentid ={props.id}   /* need for update */                         
                                                   myindex={index}   /* need for update */
                                                />
                                              </div>
                                            :  
                                                <Typography >
                                                    <Badge  overlap='rectangular'
                                                            badgeContent={parseInt(sub.score)}   
                                                            color={sub.score === sub.maxscore ? "primary" : "error"}>
                                                            {sub.info}
                                                    </Badge>
                                                </Typography>
                                            }
                                        </label>
                                    
                                        <Popover
                                            id={id}
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'center',
                                                        }}
                                            transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'center',
                                                            }}                                        
                                        > 
                                            {customMessage}                       
                                        
                                        </Popover>
                                        <Typography variant="subtitle2" >{sub.maxscore === "0" ? null : sub.maxscore}</Typography>

                                        
                                      
                        </div>
                                                                                
                    : /*กรณีเป็น props.id เป็น 0,1 */
                
                        <div    key={sub.info}  id={'frame-'+sub.info} 
                                style={checkleed && index > 0 ? 
                                              {display:"none"} 
                                            : {margin: "8px",
                                              display:"flex",
                                              justifyContent:"left",
                                              flexDirection: "row",
                                              flexWrap:"wrap",
                                              alignItems:"center",
                                              
                                         
                                            }
                                    } >                 
                                     
                                    <CommentIcon
                                        id={'comicon-'+sub.info}
                                        onClick={(e,info)=>handleClickOpenDialog(e,sub.info)} 
                                        style={{color: sub.reasoncomment ? "blue" :"gray",
                                                marginRight:"3px",
                                                cursor: "pointer",
                                                marginTop: props.id === "0" ? "14px" : "0px"
                                            }} />
                                        {/* ปกติแล้ว Dialog จะไม่แสดง */}  
                                              
                                        <MyDialog
                                            info={sub.info}
                                            parentid={activeinfo}  
                                            holdparentid ={props.id} 
                                            open={dialogopen}
                                            value={sub.reasoncomment}
                                            close={handleCloseDialog}
                                          
                                                                                       
                                        />
                                        {/* ปกติแล้ว Dialog จะไม่แสดง */}  

                                        <MyCheckboxA id={index+sub.info+"A"} 
                                            name={sub.info+"A"} 
                                            value={sub.listcheckbox[0]} 
                                            parentid={sub.info} 
                                            holdparentid ={props.id}                            
                                            myindex={index}                             
                                            style={{backgroundColor:"#32d95e"}} />

                                        <span style={sub.option !== "o" ? 
                                                         {visibility:"hidden"}
                                                        :{visibility:"visible"}
                                                    }>  
                                            <MyCheckboxB id={index+sub.info+"B"} 
                                                name={sub.info+"B"} 
                                                value={sub.listcheckbox[1]} 
                                                parentid={sub.info} 
                                                holdparentid ={props.id}                            
                                                myindex={index}                            
                                                style={{backgroundColor:"#eef51d"}} />
                                            <MyCheckboxC id={index+sub.info+"C"} 
                                                name={sub.info+"C"} 
                                                value={sub.listcheckbox[2]} 
                                                parentid={sub.info} 
                                                holdparentid ={props.id} 
                                                myindex={index} 
                                                style={{backgroundColor:"#f5851d"}} />    
                                        </span>      
                                        
                                        <label  onClick={(event)=>{handleClick(event,index)}} 
                                                style={sub.option === "o" ? 
                                                             { width: "500px",
                                                               marginLeft: "10px",
                                                               cursor:"pointer"
                                                             }
                                                            :{ color: "red",
                                                               width: "500px",
                                                               marginLeft: "10px",
                                                               cursor:"pointer"
                                                             }
                                                      } >
                                            <Typography style={{marginTop: props.id === "0" ? "14px" : "0px"}} >
                                                <Badge  overlap='rectangular'
                                                        badgeContent={parseInt(sub.score)}   
                                                        color={sub.score === sub.maxscore ? "primary" : "error"}>
                                                        {sub.info}
                                                </Badge>
                                            </Typography>
                                        </label>
                                    
                                        <Popover
                                            id={id}
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                                            vertical: 'bottom',
                                                            horizontal: 'center',
                                                        }}
                                            transformOrigin={{
                                                            vertical: 'top',
                                                            horizontal: 'center',
                                                            }}                                        
                                        > 
                                            {customMessage}                       
                                        
                                        </Popover>

                                        <Typography variant="subtitle2" style={{marginTop: props.id === "0" ? "14px" : "0px"}} >
                                            {sub.maxscore === "0" ? 
                                                                null 
                                                                : sub.maxscore
                                            }
                                        </Typography>

                                        
                                        
                                           
                                        
                                        
                                
                        </div>
                    
                
                 ))
                }
            
            </div>  
        )

} //export
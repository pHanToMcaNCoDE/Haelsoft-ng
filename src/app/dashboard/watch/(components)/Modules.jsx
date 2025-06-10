import React from "react";
import Lessons from "./Lessons";
import {
  CustomAccordion as Accordion,
  CustomAccordionSummary as AccordionSummary,
  CustomAccordionDetails as AccordionDetails,
  CustomTypography as Typography,
  CustomExpandMoreIcon as ExpandMoreIcon,
  CustomButton as Button
} from './CustomAccordion';

const Modules = ({
  module,
  open,
  setopen,
  index
}) => {
  return (
    <div key={module.uid}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='text-[.75rem]' />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="w-full py-7 border-none border-b border-[#e3e4e7] bg-[#f6f7f9] px-3 flex justify-between items-center gap-3"
        >
          <Typography className='font-bold text-md' component="span">Module {index+1}: {module.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {
            module.lessons.map((lesson) => (
              <div>

              </div>
            ))
          }
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Modules;

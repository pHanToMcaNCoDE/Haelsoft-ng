import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for type checking
import Lessons from "./Lessons";

const Modules = ({
  module,
  moduleIndex,
  selectedLesson,
  setSelectedLesson,
  hoveredLesson,
  setHoveredLesson,
  isVisible,
  toggleVisibility,
  isPaid,
  open,
  setopen, // Renamed to be consistent with common naming conventions
}) => {
  return (
    <div>
      <div className="mt-6">
        <button
          onClick={() => toggleVisibility(moduleIndex)}
          className="text-main text-start"
        >
       {moduleIndex+1}. {module.title} 
        </button>
        <div className={`space-y-2 mt-2 ${isVisible ? "block" : "hidden"}`}>
          {module.lessons.map((lesson, lessonIndex) => {
            const isFirstLesson = moduleIndex === 0 && lessonIndex === 0;
            const isClickable = isPaid || isFirstLesson;
            return (
              <Lessons
                key={lesson.id || lessonIndex}
                lesson={lesson}
                isSelected={
                  selectedLesson &&
                  selectedLesson.moduleIndex === moduleIndex &&
                  selectedLesson.lessonIndex === lessonIndex
                }
                isHovered={
                  hoveredLesson &&
                  hoveredLesson.moduleIndex === moduleIndex &&
                  hoveredLesson.lessonIndex === lessonIndex
                }
                onClick={() =>
                  isClickable && setSelectedLesson(moduleIndex, lessonIndex)
                }
                onMouseEnter={() =>
                  setHoveredLesson({ moduleIndex, lessonIndex })
                }
                onMouseLeave={() => setHoveredLesson(null)}
                isClickable={isClickable}
                setOpen={setopen} // Ensure Lessons uses this prop
                open={open}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// // Add PropTypes for type checking
// Modules.propTypes = {
//   module: PropTypes.shape({
//     module: PropTypes.string.isRequired,
//     lessons: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string, // Assuming each lesson has a unique id
//         // Add other lesson properties if needed
//       })
//     ).isRequired,
//   }).isRequired,
//   moduleIndex: PropTypes.number.isRequired,
//   selectedLesson: PropTypes.shape({
//     moduleIndex: PropTypes.number,
//     lessonIndex: PropTypes.number,
//   }),
//   setSelectedLesson: PropTypes.func.isRequired,
//   hoveredLesson: PropTypes.shape({
//     moduleIndex: PropTypes.number,
//     lessonIndex: PropTypes.number,
//   }),
//   setHoveredLesson: PropTypes.func.isRequired,
//   isVisible: PropTypes.bool.isRequired,
//   toggleVisibility: PropTypes.func.isRequired,
//   isPaid: PropTypes.bool.isRequired,
//   open: PropTypes.bool, // Check if Lessons uses this prop
//   setOpen: PropTypes.func, // Ensure Lessons uses this prop
// };

export default Modules;

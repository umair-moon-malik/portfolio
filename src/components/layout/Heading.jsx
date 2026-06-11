
// export default function Heading({heading}) {
//     return (
//         <h2 className="text-6xl font-bold font-dancing text-teal-400 mb-16 text-center underline underline-offset-16 decoration-teal-400">
//             {heading}
//         </h2>
//     )
// }

export default function Heading({ heading }) {
  return (
    <div className="flex flex-col items-center mb-16">
      <h2 className="text-6xl font-bold font-dancing text-teal-400 mb-3">
        {heading}
      </h2>
      <div className="w-12 h-px bg-teal-400" />
    </div>
  );
}
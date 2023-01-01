import React from "react";

const Feautures = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col space-y-3 mt-10 md:space-y-0 md:flex-row">
      <div className="flex flex-col space-y-3">
        <h2 className="font-bold text-black text-4xl max-w-md text-center md:text-left mx-auto">
          what's different about Manage?
        </h2>
        <p className="max-w-md text-center md:text-left mx-auto text-gray-400">
          manage provides all the functionality to your team needs, whithout the
          complexity. Our software tailor-made for modern digital prouct teams.
        </p>
      </div>
      <div className="flex flex-col space-y-3 mx-auto">
        <div className="flex flex-row md:flex-row space-x-4">
          <div>
            <div className="rounded-full bg-orange-600 text-white font-bold px-3 py-1">
              01
            </div>
          </div>
          <div>
            <div className="font-bold text-base bg-orange-200 md:bg-white mb-4">
              Advanced built-in reports
            </div>
            <p className="max-w-md text-gray-400 text-center md:text-left">
              Set internal delivery estimates and track progress toward company
              goals. Our customisable dashboard helps you build out the reports
              you need to keep key stakeholders informed.
            </p>
          </div>
        </div>
        <div className="flex flex-row md:flex-row space-x-4">
          <div>
            <div className="rounded-full bg-orange-600 text-white font-bold px-3 py-1">
              02
            </div>
          </div>
          <div>
            <div className="font-bold text-base bg-orange-200 md:bg-white mb-4">
              Everything you need in one place
            </div>
            <p className="max-w-md text-gray-400 text-left">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>
          </div>
        </div>
        <div className="flex flex-row md:flex-row space-x-4">
          <div>
            <div className="rounded-full bg-orange-600 text-white font-bold px-3 py-1">
              03
            </div>
          </div>
          <div>
            <div className="font-bold text-base bg-orange-200 md:bg-white mb-4">
              Track company-wide progress
            </div>
            <p className="max-w-md text-gray-400 text-center md:text-left">
              See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
              smallest of details. Never lose sight of the bigger picture again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feautures;

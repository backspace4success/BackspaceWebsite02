import React from 'react';
import TeamSlider from '../../components/TeamSlider';
import { teamMembers } from '../../data/team';

function Team() {
  return (
    <div className="bg-gray-50 py-20 flex justify-center">
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Meet Our Team</h2>
        <p className="text-xl text-black/70 mb-12">
          Led by industry experts passionate about education
        </p>
        <div className="flex justify-center">
          <TeamSlider members={teamMembers} />
        </div>
      </div>
    </div>
  );
}

export default Team;

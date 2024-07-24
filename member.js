function skillsMember() {
skillsMember.prototype = {
    // Get the member's skills
    getSkills: function() {
        return this.skills;
    },
    // Add a new skill to the member
    addSkill: function(skill) {
        this.skills.push(skill);
    }
};
}

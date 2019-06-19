class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('follow-state');
    this.render();
  }


  render() {
    if (this.followState === "unfollowed") {
      this.$el.append('Follow!');
    } else {
      this.$el.append('Unfollow!');
    }
  }


}


module.exports = FollowToggle;
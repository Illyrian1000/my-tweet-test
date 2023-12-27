import "./OutputTweet.css";
import html2canvas from "html2canvas";

const profileImage = "assets/profile.png";
const commentImg = "assets/icons/comment.png";
const retweetImg = "assets/icons/retweet.png";
const likeImg = "assets/icons/like.png";
const bookmarkImg = "assets/icons/bookmark.png";
const shareImg = "assets/icons/share.png";
const verifiedImg = "assets/icons/verified.png";

export default function OutputTweet(props) {
  const handleDownloadImage = () => {
    const element = document.getElementById("image_to_download");

    if (element) {
      html2canvas(element, { scale: 10 }).then((canvas) => {
        const image = canvas.toDataURL();
        const link = document.createElement("a");
        link.href = image;
        link.download = `${props.outputUsername}.png`;
        link.click();
      });
    }
  };
  return (
    // TWEET container
    <div className="tweet_output">
      {/* Tweet background color */}
      <div id="image_to_download" className="tweet_bg_color">
        {/* Tweet card that hold all the elements inside the tweet */}
        <div className="tweet_card">
          <div className="user_info">
            <img
              alt=""
              src={
                props.outputImage
                  ? URL.createObjectURL(props.outputImage)
                  : profileImage
              }
              className="profile_picture"
            />
            <div>
              <p className="output_username">
                {props.outputUsername}
                <img id="verified_icon" src={verifiedImg} />
              </p>
              <p className="output_handle">@{props.outputHandle}</p>
            </div>
          </div>
          <div
            value={props.outputTweet}
            className="tweet_message"
            dangerouslySetInnerHTML={{
              __html: props.outputTweet,
            }}
          ></div>
          <div className="icons_cont">
            <img src={commentImg} alt="" className="icon" />
            <img src={retweetImg} alt="" className="icon" />
            <img src={likeImg} alt="" className="icon" />
            <img src={bookmarkImg} alt="" className="icon" />
            <img src={shareImg} alt="" className="icon" />
          </div>
        </div>
      </div>

      <button className="download_btn" onClick={handleDownloadImage}>
        Download Tweet
      </button>
    </div>
  );
}

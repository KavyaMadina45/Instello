import ReelItem from "./ReelItem";

const reels = [
  { id: 1, video: "https://res.cloudinary.com/dwc7zolv7/video/upload/v1765292640/Ninnu_kori_movie_Heart_touching_what_s_up_status_irraik.mp4", user: "kavya", caption: "🔥 Instello reels" },
  { id: 2, video: "https://res.cloudinary.com/dwc7zolv7/video/upload/v1765381398/Manasuna_unnadhi.._%EF%B8%8F_jhchnj.mp4", user: "instello", caption: "React magic" },
  {id:3,video:"https://res.cloudinary.com/dwc7zolv7/video/upload/v1764568271/lion_attitude_xpo71m.mp4"},
];

export default function ReelFeed() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory object-contain">
      {reels.map(reel => (
        <ReelItem key={reel.id} reel={reel} />
      ))}
    </div>
  );
}

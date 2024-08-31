import BlurFade from "@/components/magicui/blur-fade";
import GradualSpacing from "@/components/magicui/gradual-spacing";

function HomeBanner() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video
          className="w-full h-full object-cover opacity-30"
          autoPlay
          loop
          muted
        >
          <source
            src="/assets/videos/coming-soon-bg-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative  text-center p-4">
        <GradualSpacing
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.1em] text-dark dark:text-light md:leading-[5rem]"
          text="Daawat.pk"
        />
        <BlurFade delay={0.25 * 2} inView>
          <p className="text-dark dark:text-light text-xl md:text-2xl my-4 w-full max-w-3xl md:h-32 overflow-hidden">
            Daawat.pk is Pakistan&apos;s leading online catering service, a
            highly regarded and distinguished name in the catering sector.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}

export default HomeBanner;

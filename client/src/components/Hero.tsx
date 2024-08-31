
import { Button } from './ui/button'


const Hero = () => {
  return (
    <div className="flex flex-col">
    <main className="flex-1">
      <section className="w-full py-12 sm:py-24 md:py-32 lg:py-40 xl:py-48 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 ">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Your Business Potential with Our SaaS Solution
                </h1>
                <p className="max-w-[600px] md:text-xl">
                  Streamline your operations, boost productivity, and drive growth with our cutting-edge SaaS
                  platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                 className=''
                >
                  Get Started
                </Button>
                <Button>
                Learn More
                </Button>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1556741533-974f8e62a92d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Streamline Your Business with Our SaaS Platform
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our SaaS solution offers a comprehensive set of features to help you optimize your operations, boost
                productivity, and drive growth.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Automated Workflows</h3>
              <p className="text-sm text-muted-foreground">
                Streamline your business processes with our intuitive workflow automation tools.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Real-Time Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Gain valuable insights into your business performance with our advanced analytics and reporting.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Scalable Infrastructure</h3>
              <p className="text-sm text-muted-foreground">
                Easily scale your operations as your business grows with our highly scalable infrastructure.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Seamless Integrations</h3>
              <p className="text-sm text-muted-foreground">
                Seamlessly integrate our SaaS platform with your existing tools and systems.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Secure Data Management</h3>
              <p className="text-sm text-muted-foreground">
                Protect your sensitive data with our robust security measures and compliance features.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Personalized Support</h3>
              <p className="text-sm text-muted-foreground">
                Receive dedicated support from our team of experts to ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  </div>
  )
}

export default Hero
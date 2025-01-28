import { Accordion, Image, Paragraph, Square, XStack, YStack } from "tamagui";
import { ChevronDown } from "@tamagui/lucide-icons";
import Link from "next/link";

export function WorkAccordion() {
  return (
    <Accordion overflow="hidden" width="100%" type="multiple">
      {/* wizard perks */}
      <Accordion.Item value="a1">
        <Accordion.Trigger flexDirection="row">
          {({ open }: { open: boolean }) => (
            <XStack justifyContent="space-between" width="100%">
              <XStack alignItems="center">
                <Image
                  source={{
                    uri: "https://media.licdn.com/dms/image/v2/D560BAQHRWbi6LZa-xA/company-logo_200_200/company-logo_200_200/0/1737743048180/wizardperks_logo?e=1746057600&v=beta&t=J4mCrgkHeVO01KcvWh_nNQwp8jZc74nxI_ztESOxMVY",
                    width: 35,
                    height: 35,
                  }}
                  enterStyle={{
                    scale: 1,
                    y: -0.1,
                    opacity: 0,
                  }}
                  animation="slow"
                  borderRadius="$1"
                  alt="Big leap health company logo"
                  marginRight="$3"
                />
                <YStack>
                  <Paragraph size="$3">
                    Wizard Perks - Founding Engineer
                  </Paragraph>
                  <Paragraph size="$1">January 2025 - Present</Paragraph>
                </YStack>
              </XStack>
              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </XStack>
          )}
        </Accordion.Trigger>
        <Accordion.HeightAnimator animation="medium">
          <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
            <YStack gap="$2">
              <Paragraph size="$4">
                I'm currently the founding engineer at Wizard Perks.
              </Paragraph>
              <Paragraph size="$4">
                Modern perks companies are still largely based on newsletters.
                We're building a modern alternative, with exclusive perks at
                national merchants. We're backed by{" "}
                <Link href="https://www.villageglobal.vc/" target="_blank">
                  {" "}
                  Village Global
                </Link>
                .
              </Paragraph>
              <Paragraph size="$4">
                If you're interested in working with us, feel free to{" "}
                <Link href="mailto:mason@wizardperks.com">reach out</Link>.
              </Paragraph>
            </YStack>
          </Accordion.Content>
        </Accordion.HeightAnimator>
      </Accordion.Item>

      {/* blh */}
      <Accordion.Item value="a1">
        <Accordion.Trigger flexDirection="row">
          {({ open }: { open: boolean }) => (
            <XStack justifyContent="space-between" width="100%">
              <XStack alignItems="center">
                <Image
                  source={{
                    uri: "https://media.licdn.com/dms/image/v2/D4E0BAQGNyDpyEWyf-Q/company-logo_200_200/company-logo_200_200/0/1729549517324/big_leap_health_logo?e=1746057600&v=beta&t=d1NG2TzCL2dsFTJzaVEKwFxoZf3CVmf6kMOrcQXeQig",
                    width: 35,
                    height: 35,
                  }}
                  enterStyle={{
                    scale: 1,
                    y: -0.1,
                    opacity: 0,
                  }}
                  animation="slow"
                  borderRadius="$1"
                  alt="Big leap health company logo"
                  marginRight="$3"
                />
                <YStack>
                  <Paragraph size="$3">
                    Big Leap Health - Software Engineer
                  </Paragraph>
                  <Paragraph size="$1">September 2024 - Present</Paragraph>
                </YStack>
              </XStack>
              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </XStack>
          )}
        </Accordion.Trigger>
        <Accordion.HeightAnimator animation="medium">
          <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
            <YStack gap="$2">
              <Paragraph size="$4">
                I currently work at Big Leap Health as the first software
                engineer.
              </Paragraph>
              <Paragraph size="$4">
                <Paragraph size="$4">
                  <a
                    href="https://www.linkedin.com/in/yakovkagan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Yakov
                  </a>{" "}
                  was an advisor and consultant at Pathize. After I left{" "}
                </Paragraph>
                Pathize, he was at the top of my list of people to work with.
              </Paragraph>
              <Paragraph size="$4">
                BLH is working on clinical infrastructure/tooling that lets
                clinics that offer novel therapeutics (like ketamine,
                psilocybin, etc.) to scale their operations, and accept
                insurance.
              </Paragraph>
            </YStack>
          </Accordion.Content>
        </Accordion.HeightAnimator>
      </Accordion.Item>

      {/* pathize */}
      <Accordion.Item value="a2">
        <Accordion.Trigger flexDirection="row">
          {({ open }: { open: boolean }) => (
            <XStack justifyContent="space-between" width="100%">
              <XStack alignItems="center">
                <Image
                  source={{
                    uri: "https://media.licdn.com/dms/image/D4E0BAQFA6vg5e2xKQQ/company-logo_200_200/0/1695238933687/pathize_logo?e=2147483647&v=beta&t=f6Yl7rHVH7JLhAUO0ZKYHRFZ-xHpmuUxVAV2pMwzAu4",
                    width: 35,
                    height: 35,
                  }}
                  enterStyle={{
                    scale: 1,
                    y: -0.1,
                    opacity: 0,
                  }}
                  animation="slow"
                  borderRadius="$1"
                  alt="Flexpa company logo"
                  marginRight="$3"
                />
                <YStack>
                  <Paragraph size="$3">
                    Pathize Health - Co-founder, CTO
                  </Paragraph>
                  <Paragraph size="$1">November 2022 - April 2024</Paragraph>
                </YStack>
              </XStack>
              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </XStack>
          )}
        </Accordion.Trigger>
        <Accordion.HeightAnimator animation="medium">
          <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
            <YStack gap="$2">
              <Paragraph size="$4">
                I co-founded Pathize Health late in 2022.
              </Paragraph>
              <Paragraph size="$4">
                The bet was simple: Long COVID and its associated comorbidities
                was the largest public health risk in the country.
              </Paragraph>
              <Paragraph size="$4">
                From this, the product became simple: build a symptom and
                real-time activity tracker, and then expand into tech-enabled
                services / telehealth.
              </Paragraph>
              <Paragraph size="$4">
                I spent twelve months straight building Pathize, created the
                user acquisition funnel, and took the company to a projected
                $75K in ARR. It was the first time someone paid for something I
                had made.
              </Paragraph>
            </YStack>
          </Accordion.Content>
        </Accordion.HeightAnimator>
      </Accordion.Item>

      {/* flexpa */}
      <Accordion.Item value="a3">
        <Accordion.Trigger flexDirection="row">
          {({ open }: { open: boolean }) => (
            <XStack justifyContent="space-between" width="100%">
              <XStack alignItems="center">
                <Image
                  source={{
                    uri: "https://media.licdn.com/dms/image/C560BAQH1w4sTgAR83w/company-logo_200_200/0/1651862878998/automate_medical_logo?e=2147483647&v=beta&t=jhOUIe0szV2qe9JmskN-TW7o1oSUiy3Pl6N3cXdDbaM",
                    width: 35,
                    height: 35,
                  }}
                  enterStyle={{
                    scale: 1,
                    y: -0.1,
                    opacity: 0,
                  }}
                  animation="slow"
                  borderRadius="$1"
                  alt="Flexpa company logo"
                  marginRight="$3"
                />
                <YStack>
                  <Paragraph size="$3">Flexpa - Software Developer</Paragraph>
                  <Paragraph size="$1">June 2022 - November 2022</Paragraph>
                </YStack>
              </XStack>
              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </XStack>
          )}
        </Accordion.Trigger>
        <Accordion.HeightAnimator animation="medium">
          <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
            <YStack gap="$2">
              <Paragraph size="$4">
                I was the third developer hired at Flexpa after graduating from
                Northwestern.
              </Paragraph>
              <Paragraph size="$4">
                By the time I joined Flexpa, their product, &quot;Plaid for
                Healthcare&quot;, was in full swing.
              </Paragraph>
              <Paragraph size="$4">
                With the time I spent there, I made core contributions to the
                OAuth widget, as well as worked on a theming system.
              </Paragraph>
            </YStack>
          </Accordion.Content>
        </Accordion.HeightAnimator>
      </Accordion.Item>

      {/* flexpa intern */}
      <Accordion.Item value="a4">
        <Accordion.Trigger flexDirection="row">
          {({ open }: { open: boolean }) => (
            <XStack justifyContent="space-between" width="100%">
              <XStack alignItems="center">
                <Image
                  source={{
                    uri: "https://media.licdn.com/dms/image/C560BAQH1w4sTgAR83w/company-logo_200_200/0/1651862878998/automate_medical_logo?e=2147483647&v=beta&t=jhOUIe0szV2qe9JmskN-TW7o1oSUiy3Pl6N3cXdDbaM",
                    width: 35,
                    height: 35,
                  }}
                  enterStyle={{
                    scale: 1,
                    y: -0.1,
                    opacity: 0,
                  }}
                  animation="slow"
                  borderRadius="$1"
                  alt="Flexpa company logo"
                  marginRight="$3"
                />
                <YStack>
                  <Paragraph size="$3">
                    Flexpa - Software Developer (Intern)
                  </Paragraph>
                  <Paragraph size="$1">June 2021 - December 2021</Paragraph>
                </YStack>
              </XStack>
              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </XStack>
          )}
        </Accordion.Trigger>
        <Accordion.HeightAnimator animation="medium">
          <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
            <YStack gap="$2">
              <Paragraph size="$4">
                I was the first intern hired at Flexpa.
              </Paragraph>
              <Paragraph size="$4">
                At Flexpa, I worked on tooling that made it easier for
                developers working with FHIR build APIs (specifically, SMART
                auth and CDS Hooks).
              </Paragraph>
              <Paragraph size="$4">
                At the time, Flexpa was known as Automate Medical, and the team
                was still searching for what to bet the company on. This finally
                came in September when the idea for building &quot;Plaid for
                Healthcare&quot; came - group together the new Patient Access
                APIs, and make it easier for companies to get access to
                patients&apos; digital health records.
              </Paragraph>
            </YStack>
          </Accordion.Content>
        </Accordion.HeightAnimator>
      </Accordion.Item>

      {/* brinc */}
      <Accordion.Item value="a5">
        <Accordion.Trigger flexDirection="row">
          {({ open }: { open: boolean }) => (
            <XStack justifyContent="space-between" width="100%">
              <XStack alignItems="center">
                <Image
                  source={{
                    uri: "https://media.licdn.com/dms/image/v2/C560BAQFEHwm09uVV0w/company-logo_200_200/company-logo_200_200/0/1633100886398/brinc_drones_logo?e=1746057600&v=beta&t=8VRbMGMQkSicIbArcxN1NUh_NOZq8sg34LIlTv13nIg",
                    width: 35,
                    height: 35,
                  }}
                  enterStyle={{
                    scale: 1,
                    y: -0.1,
                    opacity: 0,
                  }}
                  animation="slow"
                  borderRadius="$1"
                  alt="Brinc company logo"
                  marginRight="$3"
                />
                <YStack>
                  <Paragraph size="$3">Brinc - Web Developer</Paragraph>
                  <Paragraph size="$1">January 2020 - January 2021</Paragraph>
                </YStack>
              </XStack>
              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </XStack>
          )}
        </Accordion.Trigger>
        <Accordion.HeightAnimator animation="medium">
          <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
            <YStack gap="$2">
              <Paragraph size="$4">
                I was the first web developer at Brinc Drones, back when Blake
                was the only employee, and we were working out of his
                parents&apos; house.
              </Paragraph>
              <Paragraph size="$4">
                While that may not sound too impressive, he was 19 at the time.
                He received private funding in September of 2020, and as of
                writing, Brinc is worth $300M. While I basically just maintained
                the website, this was my first proper foray into startups.
              </Paragraph>
            </YStack>
          </Accordion.Content>
        </Accordion.HeightAnimator>
      </Accordion.Item>

      {/* hurds */}
      <Accordion.Item value="a6">
        <Accordion.Trigger flexDirection="row">
          {({ open }: { open: boolean }) => (
            <XStack justifyContent="space-between" width="100%">
              <XStack alignItems="center">
                <Image
                  source={{
                    uri: "https://static.wixstatic.com/media/aaba10_6b57d8c39e2447a39f70dcd676f4cfdb.png/v1/fit/w_2500,h_1330,al_c/aaba10_6b57d8c39e2447a39f70dcd676f4cfdb.png",
                    width: 35,
                    height: 35,
                  }}
                  enterStyle={{
                    scale: 1,
                    y: -0.1,
                    opacity: 0,
                  }}
                  animation="slow"
                  borderRadius="$1"
                  alt="Northwestern University logo"
                  marginRight="$3"
                />
                <YStack>
                  <Paragraph size="$3">Hurds Family Farm</Paragraph>
                  <Paragraph size="$1">August 2015 - October 2015</Paragraph>
                </YStack>
              </XStack>
              <Square animation="quick" rotate={open ? "180deg" : "0deg"}>
                <ChevronDown size="$1" />
              </Square>
            </XStack>
          )}
        </Accordion.Trigger>
        <Accordion.HeightAnimator animation="medium">
          <Accordion.Content animation="medium" exitStyle={{ opacity: 0 }}>
            <YStack gap="$2">
              <Paragraph size="$4">
                Technically my first job. I parked cars for about eight hours a
                day, several days a week.
              </Paragraph>
              <Paragraph size="$4">
                At this point in my life, getting a job and keeping one pushed
                me far out of my comfort zone. I was a fairly introverted kid,
                and had a hard time looking people in the eye. I actually used
                to wear sunglasses so it was easier.
              </Paragraph>
            </YStack>
          </Accordion.Content>
        </Accordion.HeightAnimator>
      </Accordion.Item>
    </Accordion>
  );
}

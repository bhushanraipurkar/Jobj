import Card from './Card'

const Job_sorting = () => {
  return (
    <div className="mt-14 items-center align-middle">
      <div className="mx-10 text-2xl lg:mx-32">All jobs</div>

      <div
        className=" my-5 mx-auto gap-y-8 sm:mx-8 sm:flex
        sm:flex-row sm:flex-wrap sm:gap-x-5 lg:mx-10 xl:mx-32
        "
      >
        <Card
          key={1}
          image="/hospital.jpg"
          title="Hospital jobs"
          subTopics={[
            'helper',
            'word boy',
            'nurse',
            'receptionist',
            'security guard',
            'velaa',
          ]}
        />
        <Card
          key={2}
          image="/General.jpg"
          title="General Store jobs"
          subTopics={[
            'helper',
            'cleaner',
            'receptionist',
            'security guard',
            'others...',
          ]}
        />
        <Card
          key={3}
          image="/food.jpg"
          title="Restaurent jobs"
          subTopics={[
            'helper',
            'sweeper',

            'receptionist',
            'security guard',
            'others...',
          ]}
        />
        <Card
          key={4}
          image="/Labour.jpg"
          title="Labour jobs"
          subTopics={['helper', 'sweeper', 'other...']}
        />
        <Card
          key={5}
          image="/mall3.jpg"
          title="Shopping Mall jobs"
          subTopics={[
            'helper',
            'sweeper',

            'receptionist',
            'security guard',
            'other...',
          ]}
        />
        <Card
          key={6}
          image="/Hotel.jpg"
          title="Hotel jobs"
          subTopics={[
            'helper',
            'sweeper',

            'receptionist',
            'security guard',
            'other...',
          ]}
        />
        <Card
          key={6}
          image="/Dance.jpg"
          title="Dance Tuitor"
          subTopics={['helper', 'receptionist', 'security guard', 'other...']}
        />
        <Card
          key={6}
          image="/Tour.jpg"
          title="Tour & Travels"
          subTopics={[
            'helper',
            'word boy',
            'nurse',
            'receptionist',
            'security guard',
            'velaa',
          ]}
        />
      </div>
    </div>
  )
}

export default Job_sorting

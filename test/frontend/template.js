/* eslint-disable arrow-body-style */
const data = {
  title: 'Destroy() methods',
  tests: [
    {
      title: 'adds the given template',
      setup: (cal) => {
        const template = (DateHelper) => ({
          name: 'quarter',
          rowsCount() {
            return 1;
          },
          columnsCount() {
            return 4;
          },
          mapping: (startDate, endDate, defaultValues) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            DateHelper.intervals(
              'quarter',
              startDate,
              DateHelper.date(endDate),
            ).map((d, index) => ({
              t: d,
              x: index,
              y: 0,
              ...defaultValues,
            })),

          format: {
            domainLabel: 'Q',
          },
          extractUnit(ts) {
            return DateHelper.date(ts).startOf('quarter').valueOf();
          },
        });
        cal.addTemplates(template);
        return cal.paint({
          range: 1,
          date: { start: new Date(2020, 3, 5, 3, 6) },
          domain: { type: 'year' },
          subDomain: { type: 'quarter', label: 'Q' },
        });
      },
      expectations: [
        {
          current: (d3) => {
            return d3.selectAll('.graph-subdomain-group g text').nodes().length;
          },
          expected: () => 4,
        },
        {
          current: (d3) => {
            return d3
              .select(d3.selectAll('.graph-subdomain-group g text').nodes()[0])
              .html();
          },
          expected: () => '1',
        },
        {
          current: (d3) => {
            return d3
              .select(d3.selectAll('.graph-subdomain-group g text').nodes()[1])
              .html();
          },
          expected: () => '2',
        },
        {
          current: (d3) => {
            return d3
              .select(d3.selectAll('.graph-subdomain-group g text').nodes()[2])
              .html();
          },
          expected: () => '3',
        },
        {
          current: (d3) => {
            return d3
              .select(d3.selectAll('.graph-subdomain-group g text').nodes()[3])
              .html();
          },
          expected: () => '4',
        },
      ],
    },
  ],
};

export default data;

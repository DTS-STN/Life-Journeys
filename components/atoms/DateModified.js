/**
 * Contains build time stamp
 */
export default function DateModified(props) {
  return (
    <div>
      <dl id="wb-dtmd" className="inline-flex">
        <dt>Date modified:&nbsp;</dt>
        <dd>
          <time property="dateModified">
            {process.env.NEXT_PUBLIC_BUILD_DATE}
          </time>
        </dd>
      </dl>
    </div>
  );
}

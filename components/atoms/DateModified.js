/**
 * Contains build time stamp
 */
export default function DateModified(props) {
  return <div>Date modified: {process.env.NEXT_PUBLIC_BUILD_DATE}</div>;
}

# `dataDatadogOrgGroupPolicies` Submodule <a name="`dataDatadogOrgGroupPolicies` Submodule" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatadogOrgGroupPolicies <a name="DataDatadogOrgGroupPolicies" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policies datadog_org_group_policies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.Initializer"></a>

```typescript
import { dataDatadogOrgGroupPolicies } from '@cdktn/provider-datadog'

new dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies(scope: Construct, id: string, config: DataDatadogOrgGroupPoliciesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig">DataDatadogOrgGroupPoliciesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig">DataDatadogOrgGroupPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.resetPolicyName">resetPolicyName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetPolicyName` <a name="resetPolicyName" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.resetPolicyName"></a>

```typescript
public resetPolicyName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataDatadogOrgGroupPolicies resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isConstruct"></a>

```typescript
import { dataDatadogOrgGroupPolicies } from '@cdktn/provider-datadog'

dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isTerraformElement"></a>

```typescript
import { dataDatadogOrgGroupPolicies } from '@cdktn/provider-datadog'

dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isTerraformDataSource"></a>

```typescript
import { dataDatadogOrgGroupPolicies } from '@cdktn/provider-datadog'

dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.generateConfigForImport"></a>

```typescript
import { dataDatadogOrgGroupPolicies } from '@cdktn/provider-datadog'

dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataDatadogOrgGroupPolicies resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatadogOrgGroupPolicies to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatadogOrgGroupPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policies#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataDatadogOrgGroupPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList">DataDatadogOrgGroupPoliciesPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.orgGroupIdInput">orgGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.policyNameInput">policyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.orgGroupId">orgGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.policies"></a>

```typescript
public readonly policies: DataDatadogOrgGroupPoliciesPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList">DataDatadogOrgGroupPoliciesPoliciesList</a>

---

##### `orgGroupIdInput`<sup>Optional</sup> <a name="orgGroupIdInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.orgGroupIdInput"></a>

```typescript
public readonly orgGroupIdInput: string;
```

- *Type:* string

---

##### `policyNameInput`<sup>Optional</sup> <a name="policyNameInput" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.policyNameInput"></a>

```typescript
public readonly policyNameInput: string;
```

- *Type:* string

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.orgGroupId"></a>

```typescript
public readonly orgGroupId: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPolicies.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatadogOrgGroupPoliciesConfig <a name="DataDatadogOrgGroupPoliciesConfig" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.Initializer"></a>

```typescript
import { dataDatadogOrgGroupPolicies } from '@cdktn/provider-datadog'

const dataDatadogOrgGroupPoliciesConfig: dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.orgGroupId">orgGroupId</a></code> | <code>string</code> | The UUID of the org group whose policies to list. Must be a valid UUID. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.policyName">policyName</a></code> | <code>string</code> | Filter policies by name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.orgGroupId"></a>

```typescript
public readonly orgGroupId: string;
```

- *Type:* string

The UUID of the org group whose policies to list. Must be a valid UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policies#org_group_id DataDatadogOrgGroupPolicies#org_group_id}

---

##### `policyName`<sup>Optional</sup> <a name="policyName" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesConfig.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

Filter policies by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.8.0/docs/data-sources/org_group_policies#policy_name DataDatadogOrgGroupPolicies#policy_name}

---

### DataDatadogOrgGroupPoliciesPolicies <a name="DataDatadogOrgGroupPoliciesPolicies" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPolicies.Initializer"></a>

```typescript
import { dataDatadogOrgGroupPolicies } from '@cdktn/provider-datadog'

const dataDatadogOrgGroupPoliciesPolicies: dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPolicies = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatadogOrgGroupPoliciesPoliciesList <a name="DataDatadogOrgGroupPoliciesPoliciesList" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.Initializer"></a>

```typescript
import { dataDatadogOrgGroupPolicies } from '@cdktn/provider-datadog'

new dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.get"></a>

```typescript
public get(index: number): DataDatadogOrgGroupPoliciesPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataDatadogOrgGroupPoliciesPoliciesOutputReference <a name="DataDatadogOrgGroupPoliciesPoliciesOutputReference" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.Initializer"></a>

```typescript
import { dataDatadogOrgGroupPolicies } from '@cdktn/provider-datadog'

new dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.enforcementTier">enforcementTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.orgGroupId">orgGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.policyName">policyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPolicies">DataDatadogOrgGroupPoliciesPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `enforcementTier`<sup>Required</sup> <a name="enforcementTier" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.enforcementTier"></a>

```typescript
public readonly enforcementTier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgGroupId`<sup>Required</sup> <a name="orgGroupId" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.orgGroupId"></a>

```typescript
public readonly orgGroupId: string;
```

- *Type:* string

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.policyName"></a>

```typescript
public readonly policyName: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataDatadogOrgGroupPoliciesPolicies;
```

- *Type:* <a href="#@cdktn/provider-datadog.dataDatadogOrgGroupPolicies.DataDatadogOrgGroupPoliciesPolicies">DataDatadogOrgGroupPoliciesPolicies</a>

---



